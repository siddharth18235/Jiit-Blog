import React, { useEffect, useState } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
import Note from "./Note";
import axios from "axios";
import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import Filter  from "./Filter";

function  Home() {
  const [notes, setNotes] = useState([]);
  const { user } = useAuth();
  console.log("roleID", user.role.roleId);
  useEffect(() => {
    axios.get("blog", { userId: user.role.userId }).then((res) => {
      setNotes(res.data.data.blogs);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Slider />
      <div className="absolute right-[10px]">
        {
          user.role.roleId === 3 &&  <Link to="/form">
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block mt-[10px] px-6 py-2.5 bg-blue-600 text-white font-medium text-md leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            CREATE
          </button>
        </Link>
        }
        
      </div>
      <div className="">
        <div className="container px-5 py-24 mx-auto">
        <Filter setNotes={setNotes} notes={notes} user={user}/>
          <div className="flex flex-wrap m-4">
            {notes.map((noteItem, index) => {
              let past = {
                like: false,
                dislike: false
              }
              if(noteItem.likes.find((val) => {
                return val == user.role.userId
              })){
                past.like = true
              }
              if(noteItem.dislikes.find((val) => {
                return val == user.role.userId
              })){
                past.dislike = true
              }

              return (
                <Note
                  key={index}
                  past={past}
                  likes = {noteItem.likes.length}
                  dislikes = {noteItem.dislikes.length}
                  id={noteItem._id}
                  title={noteItem.title}
                  content={noteItem.content}
                  creatorName={noteItem.creatorName}

                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
