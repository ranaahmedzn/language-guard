import { GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null)

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const twitterProvider = new TwitterAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSingIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const twitterSingIn = () => {
        setLoading(true)
        return signInWithPopup(auth, twitterProvider);
    }

    const updateUserProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            // console.log(currentUser)

            if(currentUser){
                axios.post('/jwt', {email: currentUser.email})
                .then(res => {
                    localStorage.setItem('access-token', res.data.token)
                    setLoading(false)
                })
                .catch(error => {})
            }
            else{
                localStorage.removeItem('access-token')
            }
        })

        return () => {
            return unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        googleSingIn,
        twitterSingIn,
        updateUserProfile,
        signOutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;