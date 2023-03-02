import { firestore } from "./Firebase";
import { collection } from "firebase/firestore";

const read = (user) => {
    const ref = collection(firestore, user)
}