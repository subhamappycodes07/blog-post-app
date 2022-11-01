import React, { useState } from "react";
import Input from "../components/Input";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from "next/link";
import InputPass from "../components/InputPass";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase'
import AlertBox from "../components/AlertBox";
import { useRouter } from 'next/router';



const Login = () => {
    const [name, setName] = useState("")
    const [pass, setPass] = useState("")
    const [user, setUser] = useState({})
    const [error, setError] = useState(false)
    const router = useRouter();



    // onAuthStateChanged(auth, (currentUser) => {
    //     setUser(currentUser)
    // })

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handlePassChange = (e) => {
        setPass(e.target.value)

    }

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, name, pass)
            router.push('/blog')

        }
        catch (error) {
            console.log(error.message);
            setError(true)
        }
    }
    return (
        <>
            <div className=" h-screen flex flex-col justify-center items-center ">
                <header>
                    <h1 className="font-medium text-3xl">Log In</h1>
                </header>
                {
                    error && <AlertBox bgcolor='rgb(255, 196, 196)' color="rgb(122, 46, 46)" message="Credentials didn't match" />
                }

                <div className="xl:w-1/4 p-8 flex flex-col gap-6  ">
                    <div className="flex flex-col gap-4">
                        <Input placeholder="Username or Email" type='text' handleChange={handleNameChange} />
                        <InputPass placeholder="Enter your password" handleChange={handlePassChange} />
                    </div>
                    <div className="flex items-center justify-between">
                        <FormGroup>
                            <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }} />} label={<span style={{ fontSize: '14px' }}>Remember Me</span>} />
                        </FormGroup>
                        <p className="text-blue-800 font-semibold cursor-pointer text-sm ">
                            Forget Password?
                        </p>
                    </div>
                    <button className='w-full bg-blue-700 text-white p-2 rounded-md hover:bg-blue-600 transition-all duration-300' onClick={login}>Log In</button>
                    <p className="text-center">Don't have an account?<Link href="signup" className="underline text-blue-600">Create an Account</Link></p>
                </div>
            </div >
        </>
    );
};

export default Login;
