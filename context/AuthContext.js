import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'

const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState()
    const signup = (email, password) => {
        // return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        const unsubcribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsubcribe
    }, [])


    const value = {
        currentUser, signup
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
    return useContext(AuthContext)
}