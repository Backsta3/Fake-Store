import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { getDoc, doc, setDoc} from "firebase/firestore"
import { FIREBASE_AUTH, FIREBASE_DB } from "../../firebaseConfig";

const auth = FIREBASE_AUTH;
const database = FIREBASE_DB;

const registerWithEmailAndPassword = async(name: string, email: string, password: string) => {
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password)
        const user=res.user;
        const userDocRef = doc(FIREBASE_DB, "users", user.uid)
        await setDoc(userDocRef,{
            uid:user.uid,
                name,
                email
        })
        return {success:true}
    } catch (error) {
        console.error(error)
    }
}

const loginWithEmailAndPassword = async(email: string, password: string) => {
    try{
        const res = await signInWithEmailAndPassword(auth,email,password)
        const userId = res.user.uid;
        const userRef= doc(FIREBASE_DB, "users", userId)
        const userDoc = await getDoc(userRef)
        return {
            success:true,
            user:userDoc.data()
        }
    }catch(err){
        console.error(err)
    }
}

const logout = async () => {
    await signOut(auth);
    return {success:true}
}

export {loginWithEmailAndPassword,logout,registerWithEmailAndPassword};