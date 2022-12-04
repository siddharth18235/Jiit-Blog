import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/images/maleavatar.png"

function Notification({imgSrc, name, description}) {

return (
    <a
                href="#"
                className="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2"
              >
                <img
                  className="h-8 w-8 rounded-full object-cover mx-1"
                  src={imgSrc}
                  alt="avatar"
                />
                <p className="text-gray-600 text-sm mx-2">
                  <span className="font-bold" href="#">
                    {name}
                  </span>{" "}
                  {description}
                </p>
              </a>  
)         
}

function Notifications() {
    const [showNotification, setShowNotification] = useState(false);
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
        <div className="flex justify-center">
        <div className="relative">
          <button onClick={()=>{setShowNotification(!showNotification)}} className="relative z-10 block rounded-md  p-2 focus:outline-none cursor-pointer">
            <svg
              className="h-5 w-5 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </button>
          {
            showNotification && <div
            className="absolute right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden z-20"
            style={{ width: "20rem" }}
          >
            <div className="py-2">
              
              {notificationData.map((noti)=>{
                return <Notification imgSrc={noti.imgSrc} name={noti.name} description={noti.description}/>
              })}
              
            </div>
            <Link to="/notification">
            <div
              className="block bg-gray-800 text-white text-center font-bold py-2"
              onClick={()=>{setShowNotification(false)}}
            >
              See all notifications
            </div>
            </Link>
          </div>
          }
        </div>
      </div>
      
    )
}

export default Notifications;