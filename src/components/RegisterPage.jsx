import React, { useState } from "react";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [address, setaddress] = useState("");
  const [mobile, setmobile] = useState("");
  const navigate = useNavigate();
  const data = {
    name,
    email,
    password,
    address,
    mobile,
  };
  const register = async () => {
    try {
      await axios
        .post("http://192.168.0.111:8080/register", data)
        .then((res) => console.log(res.data))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <NavBar />
      <div className=" w-screen h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center w-96 h-1/2 bg-slate-300 rounded-md shadow-lg">
          <h1 className="text-center text-2xl font-bold text-white ">
            Register
          </h1>
          <input
            className="w-3/4
          text-center
          shadow-lg
          h-10
          rounded-lg
          my-2"
            type="text"
            name="name"
            id="name"
            placeholder="enter your name"
            value={name}
            onChange={(text) => setName(text.target.value)}
          />

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
          <input
            className="w-3/4
          text-center
          shadow-lg
          h-10
          rounded-lg
          my-2"
            type="text"
            name="address"
            id="address"
            placeholder="enter your address"
            value={address}
            onChange={(text) => setaddress(text.target.value)}
          />
          <input
            className="w-3/4
          text-center
          shadow-lg
          h-10
          rounded-lg
          my-2"
            type="tel"
            name="mobile"
            id="mobile"
            placeholder="enter your mobile"
            value={mobile}
            onChange={(text) => setmobile(text.target.value)}
          />
          <button
            onClick={() => register}
            className="bg-green-500 hover:bg-green-200 w-20 h-10"
          >
            Register
          </button>
          <div className="my-5 flex">
            already registered?{" "}
            <p
              className="text-red-900 px-2 font-semibold"
              onClick={() => navigate("/login")}
            >
              Login
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
