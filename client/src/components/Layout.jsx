import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
// import { Highlight } from "@material-ui/icons";

const Layout = () => {

  const {user} = useAuth()
  console.log(user);

  return (
    <div className="py-17">
    
      <nav>
        <ul className="flex py-4 bg-amber-400">
          <li className="px-2">
            <Link to="/"><h1 className="text-xl">JIIT-NOW</h1></Link>
          </li>
          <li className="px-2 text-xl" style={{paddingLeft: "1420px"}}>
            <Link to="/"><h1>Home</h1></Link>
          </li>
          <li className="px-2 text-xl">
            <Link to="/form">Form</Link>
          </li>
          <li className="px-2 text-xl">
            <Link to="/notification">Notification</Link>
          </li>
          <li className="px-2 text-xl">
            <Link to = "/setting">Hello {user.role.firstName}</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;