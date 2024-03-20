import React, { useState } from "react";
import bg from "../assets/flamengnawa_merch.png";
import { TextField } from "@mui/material";
import { Icon } from "@iconify/react";

export default function Login() {
  const [isPasswordVisible, setPasswordVisibility] = useState(false)
  const toggleVisibility = () => {
    setPasswordVisibility(!isPasswordVisible)
  }
  return (
    <div className="h-screen w-screen flex justify-center items-center font-main">
      <div className="w-4/5 h-4/5 bg-white rounded-xl overflow-clip flex">
        <div className="w-1/2 h-full bg-dark-purple ">
          <img
            src={bg}
            alt=""
            className="w-full h-full object-cover  opacity-50"
          />
        </div>
        <div className="w-1/2 h-full bg-white flex flex-col items-center px-20 py-10">
          <p className="text-dark-purple font-bold text-5xl uppercase">
            <span className="text-red">L</span>ogin
          </p>
          <form className="w-full h-full flex flex-col justify-center gap-6">
            <TextField
              id="email"
              label="Email"
              variant="standard"
              color="secondary"
            />
            <div className="w-full relative">
              <TextField
                fullWidth
                id="password"
                label="Password"
                variant="standard"
                color="secondary"
                type={isPasswordVisible? "text" : "password"}
              />
              <Icon onClick={toggleVisibility} icon={isPasswordVisible? 'mdi:eye-off' : 'mdi:eye' } className="text-black absolute top-4 right-4 cursor-pointer text-3xl opacity-70" />
            </div>
            <div className="text-right">
              <button className="bg-red h-10 w-40 rounded-lg">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
