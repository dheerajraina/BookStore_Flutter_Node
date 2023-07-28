import firebaseApp from "../config/firebase";
import { getFirestore } from "firebase/firestore";
const fireStore = getFirestore(firebaseApp);

export default fireStore;
