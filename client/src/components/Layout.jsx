import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import image from "../assets/images/logo.png";
import {NotificationsCircle} from "@styled-icons/ionicons-sharp"

const Layout = () => {

  const {user} = useAuth()
  console.log(user);

  return (
    <div className="py-20">
      <nav
            className="flex justify-between md:justify-around py-4 bg-white/80 backdrop-blur-md shadow-md w-full px-10 fixed top-0 left-0 right-0 z-10  md:px-3">
            <div className="flex items-center">
                <Link to ="/" className="cursor-pointer">
                    <h3 className="text-2xl font-medium text-blue-500">
                        <img
                            className="h-10"
                            src={image}
                            alt="Store Logo"
                            width={120} 
                            />
                    </h3>
                </Link>
            </div>

            <div
                className="items-center md:space-x-8 justify-center justify-items-start md:justify-items-center md:flex md:pt-2 w-full left-0 top-16 px-5 md:px-10 py-3 md:py-0 border-t md:border-t-0">
                {/* <Link to = "/"
                    className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
                    Home
                </Link>
                <Link to = "/form"
                    className="flex text-gray-600 cursor-pointer transition-colors duration-300 hover:text-blue-600">
                    Form
                </Link>

                <Link to = "/notification"
                    className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
                    Notification
                </Link>

                <a href="https://www.jiit.ac.in/"
                    className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
                    About Us
                </a> */}
            </div>

            <div className="flex items-center space-x-5  md:flex">
                <div>
                  <Link to  = "/notification">
                    <NotificationsCircle width={40} />
                  </Link>
                </div>
                <div
                    className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
                    
                    {user.role.firstName}
                    
                </div>
                <Link to ="/setting"
                    className="flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold hover:text-blue-600">
                    Settings
                </Link>
            </div>
        </nav>
        <Outlet />
    </div>
  )
};


export default Layout;