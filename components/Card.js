import React, { useEffect } from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAuth } from "../context/AuthContext";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = ({ title, desc, authorName, day, month, year, id }) => {
  const { user, router, setUpdateMode,
    setIdForUpdate } = useAuth();
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "blogs", id));
      toast("Deleted", { autoClose: 1000 });
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = () => {
    setUpdateMode(true)
    setIdForUpdate(id)
    router.push('/addData')
  };
  return (
    <>
      <div className=" border-2 border-sky-500 p-4 w-1/4 flex flex-col gap-2 rounded-lg">
        <h1 className="font-mono font-bold">{title}</h1>
        <section className="flex-1">
          <p>{desc}</p>
        </section>
        <footer className="flex justify-between items-center">
          <div className="font-mono font-bold">
            <p>Author : {authorName}</p>
            <p>
              {day} {month},{year}
            </p>
          </div>

          {user.email === authorName ? (
            <div className="flex gap-2">
              <CreateIcon
                sx={{ width: "20px", height: "20px" }}
                className=" cursor-pointer"
                onClick={handleEdit}
              />
              <DeleteIcon
                sx={{ width: "20px", height: "20px" }}
                className=" cursor-pointer"
                onClick={handleDelete}
              />
            </div>
          ) : (
            ""
          )}
        </footer>
      </div>
      <ToastContainer />
    </>
  );
};

export default Card;
