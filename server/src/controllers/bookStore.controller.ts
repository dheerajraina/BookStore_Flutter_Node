import { Request, Response } from "express";
import BookStoreServices from "../services/bookstore.services";

class BookStoreController {
	private bookStoreServices = new BookStoreServices();

	public getBookList = async (req: Request, res: Response) => {
		try {
			const booksList = await this.bookStoreServices.getBooks();
			res.status(200).json(booksList);
		} catch (error) {
			res.status(error.status).json({ message: error.message });
		}
	};
}


export default BookStoreController;
