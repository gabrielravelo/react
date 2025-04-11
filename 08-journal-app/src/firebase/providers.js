import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
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

export const registerUserWithEmailPassword = async({email, password, displayName}) => {
    try {
        console.log({email, password, displayName});
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;
        
        await updateProfile( FirebaseAuth.currentUser, {displayName, photoURL} );

        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (err) {
        console.log(err);
        return {
            ok: false,
            errorMessage: err.message
        }
    }
}

export const loginWithEmailPassword = () => {

    //! signInWithEmaillAndPassword
}

