import App from "./app";
import BookStoreRoutes from "./routes/bookStore.routes";
const app = new App([new BookStoreRoutes()]);

app.listen();
