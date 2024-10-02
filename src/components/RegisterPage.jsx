import React, { useState } from "react";
import { account, ID } from "../lib/appwrite";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate()
  const register = async (email, password) => {
    try {
      await account.create(ID.unique(), email, password);
      alert("register success")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <NavBar/>
    <div className=" w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-96 h-1/2 bg-slate-300 rounded-md shadow-lg">
        <h1 className="text-center text-2xl font-bold text-white ">Register</h1>

        <input
          className="w-3/4
          text-center
          shadow-lg
          h-10
          rounded-lg
          my-2"
          type="email"
          name="email"
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
          name="password"
          id="password"
          placeholder="enter your password"
          value={password}
          onChange={(text) => setpassword(text.target.value)}
          />
        <button
          onClick={() => register(email, password)}
          className="bg-green-500 hover:bg-green-200 w-20 h-10"
          >
          Register
        </button>
        <div className="my-5 flex">
          already registered? <p className="text-red-900 px-2 font-semibold" onClick={()=>navigate("/login")}>Login</p>
        </div>
      </div>
    </div>
            </>
  );
};

export default RegisterPage;
