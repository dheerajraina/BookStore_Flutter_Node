import { FirestoreBookInterface } from "../interfaces/firebaseResponse.interface";
import FirebaseServices from "./firebase.services";
class BookStoreServices {
	private firebaseServices = new FirebaseServices();
	public async getBooks(): Promise<Array<FirestoreBookInterface>> {
		const books: Array<FirestoreBookInterface> =
			await this.firebaseServices.getDocs("book");
		return books;
	}
	public async getBookCover(bookReference: string): Promise<string> {
		const bookCoverFile = (
			await this.firebaseServices.getFilesInsideStorageFolder(bookReference, 1)
		).items[0];
		const bookCoverUrl = await this.firebaseServices.generateFileUrl(
			bookCoverFile
		);
		return bookCoverUrl;
	}
}

export default BookStoreServices;
