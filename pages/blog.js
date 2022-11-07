import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import AddIcon from '@mui/icons-material/Add';
import Card from "../components/Card";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

const blog = () => {
  const { user, router } = useAuth();
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      let list = []
      try {

        const querySnapshot = await getDocs(collection(db, "blogs"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() })
        })
        setData(list)
        // console.log(list)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [])

  // console.log(user)
  console.log(data)
  return (
    <>
      <section>{user ? <div>
        <header className="flex justify-end items-center p-4">
          <button className="flex justify-between items-center border-2 border-sky-600 rounded-lg px-4 py-2 text-sky-600" onClick={() => router.push('/addData')}>
            <p>Add Blog</p>
            <AddIcon />
          </button>
        </header>
        <section className="flex flex-wrap items-center gap-2 p-4">
          {
            data.map((item) => (
              <Card key={item.id} title={item.title} desc={item.desc} authorName={item.author} date={item.timestamp.seconds} />
            ))
          }
        </section>
      </div> : ""}</section>
    </>
  );
};

export default blog;
