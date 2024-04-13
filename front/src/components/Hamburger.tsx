"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import logo from "../../public/logo.png"

const Hamburger: React.FC=()=>{
    const [open, setOpen]= useState(false)

    const HamburgerClick=()=>{
        if(open){
            setOpen(false)
        }else{
            setOpen(true)
        }
    }
    
    return(
        <div className="md:hidden w-full flex items-center justify-between flex-wrap bg-gray-900">
            <button className="block size-10 rounded-lg bg-orange-500 m-5 text-center align-middle text-sm font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={HamburgerClick}>&#9776;</button>
            <div className={`${open? "h-full bg-gray-700 fixed left-0 top-0 w-3/4 z-10 border-e-2 border-slate-500 rounded-sm": "hidden"}`}>
                <button className="block size-10 rounded-lg bg-orange-500 m-5 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={HamburgerClick}>X</button>
                <ul>
                    <Link href="/" onClick={HamburgerClick} className="block text-center my-5 w-full border-b-2 border-slate-600">Home</Link>
                    <Link href="/about" onClick={HamburgerClick} className="block text-center my-5 w-full border-b-2 border-slate-600">About</Link>
                    <Link href="/products" onClick={HamburgerClick} className="block text-center my-5 border-b-2 border-slate-600">Products</Link>
                </ul>
            </div>
            <Link href="/">
            <Image src={logo} width="100" alt="logo" />
            </Link>
        </div>
    )
}

export default Hamburger;