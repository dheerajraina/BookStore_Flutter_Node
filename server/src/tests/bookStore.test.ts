import BookStoreServices from "../services/bookstore.services";
describe("BookStore Services", () => {
	const bookStoreServices = new BookStoreServices();

	it("get books", async () => {
		const result = await bookStoreServices.getBooks();
		expect(result).resolves;
	}, 10000);
	it("get book cover", async () => {
		const result = await bookStoreServices.getBookCover("8u394u93jcnjriw");
		expect(result).resolves;
	}, 10000);
});
