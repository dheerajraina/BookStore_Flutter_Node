import { FirestoreBookInterface } from "../interfaces/firebaseResponse.interface";
import FirebaseServices from "./firebase.services";
class BookStoreService {
	private firebaseServices = new FirebaseServices();
	public async getBooks(): Promise<Array<FirestoreBookInterface>> {
		const books: Array<FirestoreBookInterface> =
			await this.firebaseServices.getDocs("book");
		return books;
	}
}

export default BookStoreService;
