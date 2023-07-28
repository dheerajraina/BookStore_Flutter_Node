import { addDoc, collection } from "firebase/firestore";
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
}

export default FirebaseServices;
