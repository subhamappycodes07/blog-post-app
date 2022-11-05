import { createContext, useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../config/firebase';
import { useRouter } from 'next/router';
const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    // path track
    const router = useRouter();

    // error handle
    const [signUpFieldErr, setSignUpFieldErr] = useState(false)
    const [logInFieldErr, setLogInFieldErr] = useState(false)
    const [lengthError, setLengthError] = useState(false)
    const [emailReq, setEmailReq] = useState(false)
    const [passReq, setPassReq] = useState(false)
    const [loginError, setLoginError] = useState(false)
    const [errMsg, setErrMsg] = useState("")

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    console.log(user);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    uid: user.uid, email: user.email, displayName: user.displayName,
                })
            } else {
                setUser(null)
            }
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = async () => {
        setUser(null)
        await signOut(auth)
        setLoginError(false)
    }

    const handleMessage = (authCode) => {
        switch (authCode) {
            case "auth/wrong-password":
                setErrMsg("Password provided is not corrected");
                break;

            case "auth/invalid-email":
                setErrMsg("Email provided is invalid");
                break;
            case "auth/user-not-found": setErrMsg("User not found/create an account");
                break;
            case "auth/email-already-in-use": setErrMsg("email-already-in-use");
                break;

            // default:
            //     return "";
        }
    }
    const value = {
        user, signup, login, logout, loginError, setLoginError, logInFieldErr, setLogInFieldErr, signUpFieldErr, setSignUpFieldErr, router, passReq, setPassReq, emailReq, setEmailReq, lengthError, setLengthError
    }

    return <AuthContext.Provider value={value}>{loading ? null : children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)