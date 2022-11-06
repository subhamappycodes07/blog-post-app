import React from "react";
import { useAuth } from "../context/AuthContext";

const blog = () => {
  const { user } = useAuth();
  return (
    <>
      <section>{user ? <div>list</div> : <div>Hi i'am dashboard</div>}</section>
    </>
  );
};

export default blog;
