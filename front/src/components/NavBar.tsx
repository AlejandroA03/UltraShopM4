"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import logo from "../../public/logo.png"
import Image
 from 'next/image'
const links=[
    {name:"home", text:"Home", href:"/"},
    {name:"about", text:"About", href:"/about"},
    {name:"products", text:"Products", href:"/products"},
    {name:"login", text:"Sign in", href:"/login"},
    {name:"register", text:"Register", href:"/register"}
]

const NavBar: React.FC=()=>{
    const pathname= usePathname()
    return(
        <nav className=''>
            <div className='flex items-center justify-between flex-wrap bg-gray-900 p-6 drop-shadow-xl'>
                <Image src={logo} width="100" alt="logo" />
                <ul>
                    {links.map((link)=>{
                        return(<Link href={link.href} key={link.name}
                        className={`p-6 hover:brightness-75

                        ${pathname=== link.href? "cursor-default brightness-75 disabled": ""}`}>{link.text}</Link>)
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;