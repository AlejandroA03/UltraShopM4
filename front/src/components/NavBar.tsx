"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import logo from "../../public/logo.png"
import Image from 'next/image'
import Searchbar from './Searchbar'

const links=[
    {name:"home", text:"Home", href:"/"},
    {name:"about", text:"About", href:"/about"},
    {name:"products", text:"Products", href:"/products"}
]

const NavBar: React.FC=()=>{
    const pathname= usePathname()
    return(
        <nav className='max-md:hidden'>
            <div className='flex items-center justify-between flex-wrap bg-gray-900 p-1 px-5 drop-shadow-xl'>
                <Link href="/">
                <Image src={logo} width="100" alt="logo" />
                </Link>
                <Searchbar />
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