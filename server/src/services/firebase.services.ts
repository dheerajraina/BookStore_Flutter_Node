import {
	addDoc,
	collection,
	query,
	getDocs,
	QuerySnapshot,
	DocumentData,
} from "firebase/firestore";
import { ref, list, ListResult, getDownloadURL } from "firebase/storage";
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
	) {
		try {
			const pathReference = ref(firebaseStorage, folderName);
			const files = await list(pathReference, {
				maxResults: limit,
				pageToken: nextPageToken,
			});
			const response = this.cleanFirebaseStorageResponse(files);
			return response;
		} catch (error) {
			throw new HttpException(1004, "Unable to fetch requested data");
		}
	}

	/*
		utility that extracts the list file paths and next page token from the
		response of getFilesInsideFolder function
	*/
	private cleanFirebaseStorageResponse(files: ListResult) {
		let extractedFilePaths = files.items.map((item) => item.fullPath);
		const result = {
			items: extractedFilePaths,
			nextPageToken: files.nextPageToken,
		};
		return result;
	}

	// TODO: make below function to generate a signed url , for now its fine
	public async generateFileUrl(filePath: string): Promise<string> {
		try {
			const pathReference = ref(firebaseStorage, filePath);
			const generatedUrl = await getDownloadURL(pathReference);
			return generatedUrl;
		} catch (error) {
			throw new HttpException(1005, "Unable to fetch requested file");
		}
	}

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
