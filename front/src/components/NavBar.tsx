"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links=[
    {name:"home", text:"Inicio", href:"/"},
    {name:"login",text:"Inicia sesión", href:"/login"},
    {name:"register", text:"Regístrate", href:"/register"}
]

const NavBar: React.FC=()=>{
    const pathname= usePathname()
    return(
        <nav className=''>
            <div className='flex items-center justify-between flex-wrap bg-teal-500 p-6 drop-shadow-xl'>
                <ul>
                    {links.map((link)=>{
                        return(<Link href={link.href} key={link.name}
                        className={`p-6 hover:brightness-75

                        ${pathname=== link.href? "disabled brightness-75 disabled": ""}`}>{link.text}</Link>)
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;