"use client"

import { useState } from "react";
import axios from "axios";

const LOGINUSER_URL="http://localhost:3001/users/login"

export default function Login() {
  const [userData, setUserData]=useState({
    email:"",
    password:""
  })

  const inputHandler = (event:any)=>{
    const {name, value}=event.target
    setUserData({...userData, [name]:value})
  }

  const submitHandler =(event:any)=>{
    event.preventDefault()

    axios.post(LOGINUSER_URL, userData)
    .then(({data})=> data)
    .then(data=>{
        localStorage.setItem("userToken", data.token)
        window.location.replace("/")
    })
    .catch(()=>alert("Incorrect email or password"));
  }

  return (
    <div className=" grid place-content-center m-7">
      <form onSubmit={submitHandler} className="rounded-xl bg-gray-800 w-96 relative p-10 mb-32">
        <div>
          <h2 className="w-full text-center mb-10 text-lg">Login</h2>
          <div>
            <label htmlFor="email" className="my-3 w-full px-5">Email: </label>
            <input type="email" name="email" id="email" value={userData.email} required onChange={inputHandler} className="block bg-gray-900 rounded-lg p-3 text-sm my-3 w-full px-5"/>
          </div>
          <div>
            <label htmlFor="password" className="my-3 w-full px-5">Password: </label>
            <input type="password" name="password" id="password" value={userData.password} required onChange={inputHandler} className="block bg-gray-900 rounded-lg p-3 text-sm my-3 w-full px-5"/>
          </div>
        <button className="block w-2/3 rounded-lg bg-orange-500 py-3 px-6 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Login</button>
        </div>
      </form>
    </div>
  );
}