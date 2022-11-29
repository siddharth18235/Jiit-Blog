import React from "react";
import picture from "../assets/images/default.png";

function Note(props) {
  return (
    <div class="p-4 md:w-1/3">
      <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
        <img
          class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
          src={picture}
          alt="blog"
        />
        <div class="p-6">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            Faculty Name
          </h2>
          <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
            {props.title}
          </h1>
          <p class="leading-relaxed mb-3">
            {props.content}Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.
          </p>
          <div class="flex items-center flex-wrap ">
            <button class="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
              Like
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Note;
