import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from 'react';
import initAuthentication from "../Firebase/firebase.initialize";

initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    
   
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Sign in Using Google
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
           
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    })

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        });
    }

    // Register with Email and Password

    const handleCreatingUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
           
    }

    const handleUserLogin = (userEmail, userPassword) => {
        signInWithEmailAndPassword(auth, userEmail, userPassword)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            }).catch (error=> console.log(error))
               
            
    }

    return {
        user,
        setUser,
        signInUsingGoogle,
        logOut,
        handleCreatingUser,
        handleUserLogin
    }
};

export default useFirebase;