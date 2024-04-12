"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation'
import Image from "next/image"
import cart from "../../public/cart.png"


const links=[
    {name:"login", text:"Sign in", href:"/login"},
    {name:"register", text:"Register", href:"/register"}
]

let login=true

const CartLogin: React.FC=()=>{
    const pathname= usePathname()
    return(
        <div className='max-md:hidden'>
            <div className='flex items-center justify-between flex-wrap bg-gray-900 drop-shadow-xl'>
                {!login? <ul>
                    {links.map((link)=>{
                        return(<Link href={link.href} key={link.name}
                        className={`px-6 text-xs hover:brightness-75

                        ${pathname=== link.href? "cursor-default brightness-75": ""}`}>{link.text}</Link>)
                    })}
                </ul>:
                    <ul>
                        <Link href="/orders" key="orders"
                            className={`px-6 text-xs hover:brightness-75
    
                            ${pathname=== "/orders"? "cursor-default brightness-75": ""}`}>My orders</Link>
                        <span className="text-xs">Log Out</span>
                    </ul>}
                <Image src={cart} width="30" alt="cart" className="mx-5 mt-2"/>
            </div>
        </div>
    )
}

export default CartLogin;