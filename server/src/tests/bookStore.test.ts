import BookStoreService from "../services/bookstore.service";
describe("BookStore Services", () => {
	const bookStoreServices = new BookStoreService();

	it("get books", async () => {
		const result = await bookStoreServices.getBooks();
		expect(result).resolves;
	}, 10000);
});
