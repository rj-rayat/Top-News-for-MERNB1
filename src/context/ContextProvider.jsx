
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../utility/firebase.config";
import { useEffect, useState } from "react";
export default function ContextProvider({children}) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);

    };

    const signIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signedOut = ()=>{signOut(auth)}

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        });

        return () => {
            unSubscribe()
        } 
    }, [])
    const userInfo = {
        loading,
        createUser,
        signIn,
        user,
        signedOut,
    }
    return (
    <AuthContext value={userInfo}>
        {children}
    </AuthContext>
  )

}