import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';


export const AuthContext= createContext()

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const[loading, setLoading]= useState(true)
    const [user, setUser]= useState(null)
    const [errorMessage, setErrorMessage]= useState('')
    const provider= new GoogleAuthProvider()

    // register -
    const register= (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login
    const login=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout= ()=>{
        return signOut(auth)
    }

    // forgatePassword
    const forgatePassword=(email)=>{
        return sendPasswordResetEmail(auth, email)
    }

    // onStateChange
    useEffect(()=>{
        const unSubscribe=
            onAuthStateChanged(auth, (currectUser)=>
            {
                setUser(currectUser)
                setLoading(false)
            }
            )
        
        return ()=>{
            unSubscribe()
        }
    },[])
    // console.log(user)

    // signInWithGoogle
    const googleLogIn=()=>{
        return signInWithPopup(auth, provider)
    }

    // updateProfile
    const profileUpdate=(profileData)=>{
        return updateProfile(auth.currentUser, profileData)
    }

    const authData= {
        register,
        login,
        user,
        setUser,
        logout,
        profileUpdate,
        errorMessage,
        setErrorMessage,
        forgatePassword,
        googleLogIn,
        loading
        
    }

    return <AuthContext value={authData}>{children}</AuthContext>
   
};

export default AuthProvider;