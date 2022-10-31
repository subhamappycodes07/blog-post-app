import React from 'react'
import Input from "../components/Input";
import Button from "../components/Button";
import Link from "next/link";
import InputPass from '../components/InputPass';
import { useAuth } from '../context/AuthContext';

const Signup = () => {

  // const { signup } = useAuth();
  return (
    <>
      <div className=" h-screen flex flex-col justify-center items-center">
        <header>
          <h1 className="font-medium text-3xl">Sign Up</h1>
        </header>
        <form action="" method="post" className="xl:w-1/4 p-8 flex flex-col gap-6  ">
          <div className="flex flex-col gap-4">
            <Input placeholder="First Name" type='text' />
            <Input placeholder="Last Name" type='text' />
            <Input placeholder="Email" type='email' />
            <InputPass placeholder="Password" />
            <InputPass placeholder="Confirm password" />
          </div>
          <Button name='Sign Up' />
          <p className="text-center">Allready have an account?<Link href="login" className="underline text-blue-600">Sign In</Link></p>
        </form>

      </div>
    </>
  )
}

export default Signup