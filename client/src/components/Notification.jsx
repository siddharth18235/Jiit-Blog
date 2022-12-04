import React, { useState } from "react";
import avatar from "../assets/images/maleavatar.png"
function Notification() {

    const [notificationData, setNotificationData] = useState([{
        imgSrc: "https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        name: "Siddhart Mahlotra",
        description: "Uploaded all sample instructions"
    },
    {
        imgSrc: "https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        name: "Siddhart Mahlotra",
        description: "Uploaded all sample instructions"
    }
    ]);

    return (
        <div className="flex flex-col w-fit mx-auto">
        {
            notificationData.map((noti)=>{
            return  <a
            href="#"
            className="flex items-center px-4 py-3 border-b hover:bg-gray-100 m-3"
          >
            <img
              className="h-8 w-8 rounded-full object-cover mx-1"
              src={noti.imgSrc}
              alt="avatar"
            />
            <p className="text-gray-600 text-lg mx-2">
              <span className="font-bold" href="#">
                {noti.name}
              </span>{" "}
              {noti.description}
            </p>
            <button class="bg-blue-500 text-[13px] hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-700 rounded ml-10">
                Mark As Read    
            </button>
          </a>  
        })
        }</div>
        
            
    )
}

export default Notification;