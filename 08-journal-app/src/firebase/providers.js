import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult( result ); OBTENER CREDENCIALES DE GOOGLE
        const { displayName, email, photoURL, uid } = result.user;
        
        return {
            ok: true,
            // user info
            displayName, email, photoURL, uid
        }

    } catch (err) {
        
        const errorCode = err.code;
        const errorMessage = err.message;

        return {
            ok: false,
            errorCode,
            errorMessage,
        }
    }
}

