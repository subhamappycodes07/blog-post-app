import React, { useEffect } from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAuth } from "../context/AuthContext";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
const Card = ({ title, desc, authorName, day, month, year, id }) => {
  const { user, data } = useAuth();
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "blogs", id));
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = () => {
    console.log(user.uid, data[0].authorId, data);
  };
  return (
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
  );
};

export default Card;
