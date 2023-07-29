import FirestoreServices from "../services/firebase.services";
import BookInterface from "../interfaces/book.interface";

describe("Firestore Services", () => {
	const firestoreServices = new FirestoreServices();

	it("save new document", async () => {
		const mockBook: BookInterface = {
			title: "Test Name 1",
			author: "Test Author 1",
			pages: 20,
			genre: "Computer & Technology",
			reference: "7ehdhiwjdowo",
		};
		const result = await firestoreServices.addNewDoc("book", mockBook);
		expect(result).resolves;
	}, 10000);

	it("get documents", async () => {
		const result = await firestoreServices.getDocs("book");
		expect(result).resolves;
	}, 10000);
});
