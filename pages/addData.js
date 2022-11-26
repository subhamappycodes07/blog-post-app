import React, { useState } from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useAuth } from '../context/AuthContext';
import Input from '../components/Input';
import { serverTimestamp, collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from '../config/firebase';
import AlertBox from '../components/AlertBox';


const addData = () => {
    const { user, router, setSuccessAlert, handleMessage, setAlertActivate, alertActivate, updateMode, setUpdateMode,
        idForUpdate, setIdForUpdate, errMsg, data, title, setTitle, desc, setDesc, toast } = useAuth();



    console.log(updateMode, idForUpdate)
    const handleTitleChange = (e) => {
        setTitle(e.target.value);

    };
    const handleDescChange = (e) => {
        setDesc(e.target.value);

    };
    // console.log(serverTimestamp())


    const handleUpdate = async () => {
        let dateObj = new Date(),
            month = dateObj.toLocaleString("default", { month: "short" }),
            day = dateObj.getDate(),
            year = dateObj.getFullYear();
        if (title == "" || desc == "") {
            setAlertActivate(true);
            handleMessage("input field should not empty");

        }
        else {
            try {
                const res =
                    await updateDoc(doc(db, "blogs", idForUpdate), {
                        title: title, desc: desc, timestamp: serverTimestamp(), authorId: user.uid, author: user.email, day: day, month: month, year: year
                    });
                res ?
                    toast("Updated Successfully", { autoClose: 100 }) : "";
                setAlertActivate(false);
                router.push('/blog')
                setTitle("")
                setDesc("")
                setIdForUpdate("")
                setUpdateMode(false)
            } catch (error) {
                console.log(error);
            }
        }


    }
    // const handleUpdate = () => {
    //     console.log("do")
    // }
    const handleAdd = async () => {
        let dateObj = new Date(),
            month = dateObj.toLocaleString("default", { month: "short" }),
            day = dateObj.getDate(),
            year = dateObj.getFullYear();
        if (title == "" || desc == "") {
            setAlertActivate(true);
            handleMessage("input field should not empty");

        }
        else {
            try {
                const res = await addDoc(collection(db, "blogs",), {
                    title: title, desc: desc, timestamp: serverTimestamp(), authorId: user.uid, author: user.email, day: day, month: month, year: year
                });
                res ?
                    toast("Added Successfully", { autoClose: 100 }) : "";
                setAlertActivate(false);
                router.push('/blog')
                setTitle("")
                setDesc("")
            } catch (error) {
                console.log(error);
            }
        }


    }
    return (
        <section>
            <div>
                <header className="flex justify-end items-center p-4">
                    <button className="flex justify-between items-center border-2 border-sky-600 rounded-lg px-4 py-2 text-sky-600" onClick={() => {
                        router.push('/blog');
                        setSuccessAlert(false);
                        setUpdateMode(false);
                        setIdForUpdate('')
                    }}>
                        <KeyboardBackspaceIcon />
                        <p>Back to Blog Page</p>
                    </button>
                </header>

                <section className="flex flex-col flex-wrap items-center gap-2 p-4">
                    {alertActivate && (
                        <AlertBox
                            bgcolor="rgb(255, 196, 196)"
                            color="rgb(122, 46, 46)"
                            message={errMsg}
                        />
                    )}
                    {/* {successAlert && (
                        <AlertBox bgcolor="#d4edda" color="#23903c" message={errMsg} />
                    )} */}
                    <Input type="text"
                        placeholder="Enter your title here" width="w-1/2" handleChange={handleTitleChange} value={title} />
                    <textarea placeholder="Enter your desc here " className="w-1/2 outline-none border border-1 border-gray-400 rounded-md p-2" onChange={handleDescChange} value={desc} />
                    <button className="w-1/2 bg-blue-700 text-white p-2 rounded-md hover:bg-blue-600 transition-all duration-300" onClick={updateMode ? handleUpdate : handleAdd} >
                        {updateMode ? 'update' : 'Add'}

                    </button>
                </section>

            </div>
        </section>

    )
}

export default addData