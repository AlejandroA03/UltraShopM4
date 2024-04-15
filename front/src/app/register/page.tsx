"use client"

import { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation'
import validateUser from "@/helpers/validateUser";
import { IRegister } from "../types";

const POSTUSER_URL="http://localhost:3001/users/register"

export default function Register() {
    const router=useRouter()

    const initialState:IRegister={
      name:"",
	    email:"",
	    password:"",
	    address:"",
	    phone:"",
      confirmpassword:""
    }

    const [data, setData]= useState(initialState)
    const [errors, setErrors]= useState(initialState)

    const handleSubmit= (event:any)=>{
      event.preventDefault()
      const newUser={
        name:data.name,
        email:data.email,
        password:data.password,
        address:data.address,
        phone:data.phone
      }
      
      axios.post(POSTUSER_URL, newUser)
      .then(({data})=>data)
      .then(()=>{
          alert(`User has been created!`)
          router.push("/login")
      })
      .catch((error)=>alert("User already exists"));
  }
  const handleReset= (event:any)=>{
    event.preventDefault()
    setData(initialState)
  }
  const handleChange= (event:any)=>{
    const {value, name} = event.target;
    setData({...data, [name]: value})

    setErrors(validateUser({...data, [name]: value}))
  }

  const formData=[
    {label: "Name: ", name:"name", type:"text", placeholder:"Pedro Sanchez" },
    {label: "Email: ", name:"email", type:"email", placeholder:"mail@example.com" },
    {label: "Address: ", name:"address", type:"text", placeholder:" 76-20 34th Ave" },
    {label: "Phone: ", name:"phone", type:"phone", placeholder:"123456789" },
    {label: "Password: ", name:"password", type:"password", placeholder:"*******" },
    {label: "Confirm password: ", name:"confirmpassword", type:"password", placeholder:"*******" }
] 

    return (
      <div className=" grid place-content-center m-7">
            <form className="rounded-xl bg-gray-800 w-96 relative p-10">
                <div>
                <h2 className="w-full text-center mb-10 text-lg">Register</h2>
                {
                    formData.map(({label, name, type, placeholder}) => {
                        return(
                            <div key={name} className="">
                                <label htmlFor={name} className="my-3 w-full px-5">{label}</label>
                                <input type={type} id={name} name={name} value={data[name]} placeholder={placeholder} onChange={handleChange} className="block bg-gray-900 rounded-lg p-3 text-sm my-3 w-full px-5"/>
                                {
                                    errors[name] ? <span className="block text-xs mb-6 w-full px-5">{errors[name]}</span>: null
                                }
                            </div>
                        )
                    })
                }
                <button type="submit" onClick={handleSubmit} disabled={data.name.length===0 || Object.keys(errors).some(e=>errors[e])} className="block w-2/3 rounded-lg bg-orange-500 py-3 px-6 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Submit</button>
                <button type="reset" onClick={handleReset} className="block w-2/3 rounded-lg bg-gray-400 py-3 px-6 mt-2 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Clean</button>
                </div>
            </form>
        </div>
    );
  }