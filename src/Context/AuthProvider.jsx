import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    const createUserWithEmailAndPasswordFunc = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithEmailAndPasswordFunc = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const signInWithPopupFunc = ()=>{
        return signInWithPopup(auth,googleProvider)
    }

   const signOutFunc=()=>{
return signOut(auth);
   }

   const updateProfileFunc=(displayName,photoURL)=>{
    return updateProfile(auth.currentUser,{
        displayName,
        photoURL,
    });

   };

    const authInfo = {
        user,
        setUser,
        createUserWithEmailAndPasswordFunc,
        signInWithEmailAndPasswordFunc,
        signInWithPopupFunc,
        signOutFunc,
        updateProfileFunc
    }

    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;