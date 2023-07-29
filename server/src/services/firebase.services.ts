import {
	addDoc,
	collection,
	query,
	getDocs,
	QuerySnapshot,
	DocumentData,
} from "firebase/firestore";
import fireStore from "../databases/firestore";
import BookInterface from "../interfaces/book.interface";
import HttpException from "../exceptions/HttpExceptions";

class FirebaseServices {
	public async addNewDoc(collectionName: string, data: BookInterface) {
		try {
			const docRef = await addDoc(collection(fireStore, collectionName), {
				data,
			});
			return docRef.id;
		} catch (error) {
			throw new HttpException(1001, "Unable to create new book record");
		}
	}

	public async getDocs(collectionName: string) {
		const booksRef = collection(fireStore, collectionName);
		const q = query(booksRef);
		const querySnapshot = await getDocs(booksRef);
		let bookList = this.cleanFirestoreResponse(querySnapshot);
		return bookList;
	}

	/*
	 since firestore response comes in with a lot of meta deta, so this function just helps us to
	 extract the useable data
	*/
	private cleanFirestoreResponse(
		querySnapshot: QuerySnapshot<DocumentData, DocumentData>
	) {
		let cleanedResponse: Array<any> = [];
		querySnapshot.docs.forEach((doc) => {
			cleanedResponse.push({ id: doc.id, ...doc.data() });
		});
		return cleanedResponse;
	}

	//.TODO Create a method to fetch cover page of the book i.e first in list

	//.TODO Create a method to fetch content of book
}

export default FirebaseServices;
