import express from "express";
import cors from "cors";
import { Route } from "./interfaces/route.interface";

class App {
	private app: express.Application;
	private port: string | number;

        constructor(routes: Route[]) {
		this.app = express();
		this.port = process.env.PORT || 3000;
		this.initializeMiddlewares();
		this.initializeRoutes(routes);
	}

	public listen() {
		this.app.listen(this.port, () => {
			return console.log("express is listening at port =", this.port);
		});
	}
	private initializeMiddlewares() {
		this.app.use(cors());
	}
	private initializeRoutes(routes: Route[]) {
		routes.forEach((route) => {
			this.app.use("/", route.router);
		});
	}
}

export default App;
