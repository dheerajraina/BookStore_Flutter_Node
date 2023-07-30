import { Router } from "express";
import BookStoreController from "../controllers/bookStore.controller";
import { Route } from "../interfaces/route.interface";

class BookStoreRoutes implements Route {
	public path = "/book-store";
	public router = Router();
	public bookStoreController = new BookStoreController();

	constructor() {
		this.initializeRoutes();
	}

	private initializeRoutes() {
		this.router.get(`${this.path}/books`, this.bookStoreController.getBookList);
	}
}

export default BookStoreRoutes;
