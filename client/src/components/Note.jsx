import React from "react";
import picture from "../assets/images/default.png";
import Like from "./LikeDislike/Like"
import LikeAndDislike from "./LikeDislike/LikeAndDislike";

function Note(props) {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
          src={picture}
          alt="blog"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {props.creatorName}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
            {props.title}
          </h1>
          <p className="leading-relaxed mb-3">{props.content}</p>
          <LikeAndDislike id={props.id} past={props.past} lk={props.likes} dlk={props.dislikes}/>
        </div>
      </div>
    </div>
  );
}

export default Note;
