import firebaseApp from "../config/firebase";
import { getStorage } from "firebase/storage";
const firebaseStorage = getStorage(firebaseApp);

export default firebaseStorage;
