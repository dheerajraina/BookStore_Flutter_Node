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
	public async getBookContent(
		bookReference: string,
		limit?: number,
		nextPageToken?: string
	) {
		const bookContent = await this.firebaseServices.getFilesInsideStorageFolder(
			bookReference,
			limit,
			nextPageToken
		);
		bookContent.items = await this.getUrls(bookContent.items);
		return bookContent;
	}
	private async getUrls(pageReferences: Array<string>) {
		for (let i = 0; i < pageReferences.length; i++) {
			const pageUrl = await this.firebaseServices.generateFileUrl(
				pageReferences[i]
			);
			pageReferences[i] = pageUrl;
		}
		return pageReferences;
	}
}

export default BookStoreServices;
