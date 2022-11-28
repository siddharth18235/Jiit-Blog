import React, { useEffect, useState } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
import Note from "./Note";
import axios from "axios";
import { useAuth } from "../context/authContext";

function Home() {
    const [notes, setNotes] = useState([]);
    const {user} = useAuth();
  useEffect(()=>{
    axios.post('blog/listAll',{userId:user.role.userId}).then((res) =>{
      setNotes(res.data.data.blogs)
    })
  },[])
    return (
        <div>
            {notes.map((noteItem, index) => {
              return (
                <Note
                  key={index}
                  id={noteItem._id}
                  title={noteItem.title}
                  content={noteItem.content}
                />
              );
            })}
        </div>
      );
    }
    
export default Home;
    