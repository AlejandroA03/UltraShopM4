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
            <button className="block size-5 rounded-lg bg-orange-500 m-5 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={HamburgerClick}>X</button>
            <div className={`${open? "h-full fixed left-0 top-0 w-3/4 z-10 border-2 rounded-sm": "hidden"}`}>
                <ul>
                    <Link href="/" onClick={HamburgerClick}>Home</Link>
                </ul>
            </div>
            <Link href="/">
            <Image src={logo} width="100" alt="logo" />
            </Link>
        </div>
    )
}

export default Hamburger;