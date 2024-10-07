import React, { useState } from "react";
import NavBar from './NavBar'
import { useDispatch } from "react-redux";
import { logIn_user } from "../redux/userSclice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [logged, setLogged] = useState(null);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  async function getLogin() {
    const data={
      email,
      password,
    }
    try {
      await axios.post("http://192.168.0.111:8080/login",data)
      .then(res=>console.log(res.data))
      .catch(error=>console.log(error))
      dispatch(logIn_user(await account.get('userId')));

      setEmail("")
      setpassword("")
    } catch (error) {
      console.log(error)
      
    }
  }
  return (
    <>
    <NavBar/>
    <div className=" w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-96 h-1/2 bg-slate-300 rounded-md shadow-lg">
        <h1 className="text-center text-2xl font-bold text-white ">login</h1>
        <input
          className="w-3/4
          text-center
          shadow-lg
          h-10
          rounded-lg
          my-2"
          type="email"
          name=""
          id="email"
          placeholder="enter your email"
          value={email}
          onChange={(text) => setEmail(text.target.value)}
          />
        <input
          className="w-3/4
          text-center
          shadow-lg        
          h-10
          rounded-lg
          my-2"
          type="password"
          name=""
          id="password"
          placeholder="enter your password"
          value={password}
          onChange={(text) => setpassword(text.target.value)}
          />
        <button onClick={()=>getLogin} className="bg-green-500 hover:bg-green-200 w-20 h-10">
          login 
        </button>
        <div className="my-5 flex">
          not a user <p className="text-red-900 px-2 font-semibold" onClick={()=>navigate("/register")}>Register</p>
        </div>
      </div>
    </div>
          </>
  );
};

export default LoginPage;
