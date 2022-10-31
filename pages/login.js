import React from "react";
import Input from "../components/Input";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from "../components/Button";
import Link from "next/link";
import InputPass from "../components/InputPass";



const Login = () => {
    return (
        <>
            <div className=" h-screen flex flex-col justify-center items-center">
                <header>
                    <h1 className="font-medium text-3xl">Log In</h1>
                </header>
                <form action="" method="post" className="xl:w-1/4 p-8 flex flex-col gap-6  ">
                    <div className="flex flex-col gap-4">
                        <Input placeholder="Username or Email" type='text' />
                        <InputPass placeholder="Enter your password" />
                    </div>
                    <div className="flex items-center justify-between">
                        <FormGroup>
                            <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }} />} label={<span style={{ fontSize: '14px' }}>Remember Me</span>} />
                        </FormGroup>
                        <p className="text-blue-800 font-semibold cursor-pointer text-sm ">
                            Forget Password?
                        </p>
                    </div>
                    <Button name='Login' />
                    <p className="text-center">Don't have an account?<Link href="signup" className="underline text-blue-600">Create an Account</Link></p>
                </form>
            </div >
        </>
    );
};

export default Login;
