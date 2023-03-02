import { doc, collection, setDoc } from "@firebase/firestore"
import { firestore } from "./firebase"

const write = (user, data) => {
    const docRef = doc(firestore, user, )
    try {
        
    } catch(err) {
        console.log(err)
    }
}
export default write