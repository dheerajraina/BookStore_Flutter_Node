import {
	addDoc,
	collection,
	query,
	getDocs,
	QuerySnapshot,
	DocumentData,
} from "firebase/firestore";
import { ref, list, ListResult } from "firebase/storage";
import firebaseStorage from "../databases/firebaseStorage";
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
		try {
			const booksRef = collection(fireStore, collectionName);
			const q = query(booksRef);
			const querySnapshot = await getDocs(booksRef);
			let bookList = this.cleanFirestoreResponse(querySnapshot);
			return bookList;
		} catch (error) {
			throw new HttpException(1002, "Unable to fetch requested data");
		}
	}

	public async getFilesInsideStorageFolder(
		folderName: string,
		limit: number,
		nextPageToken?: string
	): Promise<ListResult> {
		try {
			const pathReference = ref(firebaseStorage, folderName);
			const files = await list(pathReference, {
				maxResults: limit,
				pageToken: nextPageToken,
			});
			return files;
		} catch (error) {
			throw new HttpException(1004, "Unable to fetch requested data");
		}
	}

	/*
		TODO: Write a utility that extracts the list file paths and next page token from the
		response of getFilesInsideFolder function
	*/

	// TODO: Write a function that generates url file

	/*
	 since firestore response comes in with a lot of meta deta, so this function just helps us to
	 extract the useable data
	*/
	private cleanFirestoreResponse(
		querySnapshot: QuerySnapshot<DocumentData, DocumentData>
	) {
		try {
			let cleanedResponse: Array<any> = [];
			querySnapshot.docs.forEach((doc) => {
				cleanedResponse.push({ id: doc.id, ...doc.data() });
			});
			return cleanedResponse;
		} catch (error) {
			throw new HttpException(1003, "Exception occured while cleaning data");
		}
	}
}

export default FirebaseServices;
