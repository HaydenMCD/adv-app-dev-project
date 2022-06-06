import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'; 

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false);

    //Signup function
    async function signup(email, password) {
        setLoading(true);
        console.log(email, password)
        await createUserWithEmailAndPassword(auth, email, password)
        .then((User) => {
            setCurrentUser(User);
        })
        .catch((error) => {
            setError(error.message)
            setCurrentUser(null)
            setLoading(false)
            setLoggedIn(false)
        }).finally(() => {
            setError(null)
            setLoading(false)
            setLoggedIn(true)
        })
        return;
    }

    //Login function
    function login(email, password) {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password).then((User) => {
            setCurrentUser(User);
        }).catch(error => {
            setError(error.message)
            setCurrentUser(null)
            setLoading(false)
            setLoggedIn(false);
        }).finally(() => {
            setError(null)
            setLoading(false)
            setLoggedIn(true)
        })
        return { currentUser, error, loading }
    }

    //Logout function
    async function logout() {
        const res = await auth.signOut()
        .then(() => {
            setCurrentUser(null);
            setLoggedIn(false);
        })
        .catch((err) => {
           throw new Error(err.message);
        })
        return;
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout, 
        loading,
        error,
        loggedIn,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}