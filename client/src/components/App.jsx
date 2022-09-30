import React from "react";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Form from "./Form";
import Login from "./Login";
import Signup from "./Signup";
import Layout from "./Layout"; 
import Home from "./Home";
import { useAuth } from "../context/authContext";
import Redirect from "../pages/Redirect";
import { setAxiosDefault, setToken } from "../axiosDefault";
import Settings from "./Setting";
function App() {
  const {user} = useAuth();
  setAxiosDefault();
  if(user?.token) setToken(user.token)
  return (
    <React.Suspense fallback={
      <div>Loading</div>
    }>
        {
          !user?
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="*" element={<Redirect/>}/>
          </Routes>
          :
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="setting" element={<Settings />} />
            <Route path="*" element={<Redirect/>}/>
        </Routes>
        }
      <Footer />
    </React.Suspense>
  );
}

export default App;
