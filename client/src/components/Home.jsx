import React, { useEffect, useState } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
import Note from "./Note";
import axios from "axios";
import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";
import Slider from "./Slider";

function Home() {
  const [notes, setNotes] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    axios.post("blog/listAll", { userId: user.role.userId }).then((res) => {
      setNotes(res.data.data.blogs);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Slider />
      <div className="absolute right-[10px]">
        <Link to="/form">
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            class="inline-block mt-[10px] px-6 py-2.5 bg-blue-600 text-white font-medium text-md leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            CREATE
          </button>
        </Link>
      </div>
      <div>
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
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
        </div>
      </div>
    </div>
  );
}

export default Home;
