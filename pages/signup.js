import React, { useState, useEffect } from 'react'
import Input from "../components/Input";
import Link from "next/link";
import InputPass from '../components/InputPass';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import AlertBox from '../components/AlertBox';

const Signup = () => {

  const { user, signup, signUpFieldErr, setSignUpFieldErr, passReq, setPassReq, emailReq, setEmailReq, lengthError, setLengthError } = useAuth()
  const [fName, setFName] = useState("")
  const [lName, setLName] = useState("")
  const [signUpEmail, setSignUpEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confPassword, setConfPassword] = useState("")


  const handleFnameChange = (e) => {
    setFName(e.target.value)
  }
  const handleLnameChange = (e) => {
    setLName(e.target.value)
  }
  const handleEmailChange = (e) => {
    setSignUpEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleConfPassChange = (e) => {
    setConfPassword(e.target.value)
  }

  const handleSignup = async (e) => {
    setSignUpFieldErr(false)
    setLengthError(false)
    if ((fName) == "" || (lName) == "") {
      setSignUpFieldErr(true)
      return
    }
    if ((signUpEmail) == "") {
      setEmailReq(true)
      return
    }
    if ((password) == "" || (confPassword) == "") {
      setPassReq(true)
      return
    }
    if (password.length < 6) {
      setLengthError(true)
      return
    }
    try {
      await signup(signUpEmail, password)
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <Navbar />
      <div className=" h-screen flex flex-col justify-center items-center">
        <header>
          <h1 className="font-medium text-3xl">Sign Up</h1>
        </header>

        {
          signUpFieldErr && <AlertBox bgcolor='rgb(255, 196, 196)' color="rgb(122, 46, 46)" message="input field should not empty" />
        }
        {
          emailReq && <AlertBox bgcolor='rgb(255, 196, 196)' color="rgb(122, 46, 46)" message="email field should not empty" />
        }
        {
          passReq && <AlertBox bgcolor='rgb(255, 196, 196)' color="rgb(122, 46, 46)" message="password/confirm password field should not empty" />
        }
        {
          lengthError && <AlertBox bgcolor='rgb(255, 196, 196)' color="rgb(122, 46, 46)" message="length should not less than 6" />
        }
        <div className="xl:w-1/4 p-8 flex flex-col gap-6  ">
          <div className="flex flex-col gap-4">
            <Input placeholder="First Name" type='text' required handleChange={handleFnameChange} />
            <Input placeholder="Last Name" type='text' required handleChange={handleLnameChange} />
            <Input placeholder="Email" type='email' required handleChange={handleEmailChange} />
            <InputPass placeholder="Password" required handleChange={handlePasswordChange} />
            <InputPass placeholder="Confirm password" required handleChange={handleConfPassChange} />
          </div>
          <button className='w-full bg-blue-700 text-white p-2 rounded-md hover:bg-blue-600 transition-all duration-300' onClick={handleSignup}>Sign Up</button>
          <p className="text-center">Allready have an account?<Link href="login" className="underline text-blue-600">Sign In</Link></p>
        </div>

      </div>
    </>
  )
}

export default Signup