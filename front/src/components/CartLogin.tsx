"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation'
import Image from "next/image"
import cartImage from "../../public/cart.png"
import { useState } from "react"
import { IProductOnCart } from "@/app/types"


const links=[
    {name:"login", text:"Sign in", href:"/login"},
    {name:"register", text:"Register", href:"/register"}
]

let login=true

const CartLogin: React.FC=()=>{

    const [cart, setCart]= useState(false)
    const [cartProducts, setCartProducts]=useState([])

    const CartClick=()=>{
        if(localStorage.cart){
            setCartProducts(JSON.parse(localStorage.cart))
        }else{
            setCartProducts([])
        }
        setCart(true)
    }

    const cartLeave=()=>{
        setCart(false)
    }


    const pathname= usePathname()
    return(
        <div className=''>
            <div className='w-full flex items-center justify-between flex-wrap bg-gray-900 border-b-2 border-gray-800'>
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
                <Image src={cartImage} width="30" alt="cart" className="mx-5 my-2 hover:cursor-pointer" onClick={CartClick}/>
                <div onMouseLeave={cartLeave} className={`${cart? "fixed h-full bg-gray-700 right-0 top-0 max-md:w-3/4 w-1/4 z-10 border-s-2 border-slate-500 rounded-sm": "hidden"}`}>
                    <button onClick={cartLeave} className="block size-7 rounded-lg bg-orange-500 m-5 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">X</button>
                    <ul>
                        {cartProducts.map((product:IProductOnCart)=>{
                            return(
                                <div key={product.id} className="m-5 flex border-y-2">
                                    <img className="size-20 brightness-75 rounded-lg" src={product.image} alt="Image"/>
                                    <div className="block w-2/3 text-center">
                                        <h5 className="m-1">{product.name}</h5>
                                        <h5>US ${product.price}</h5>
                                        <h5>Quantity:{product.quantity}</h5>
                                    </div>
                                    <button className="block">X</button>
                                </div>
                            )
                        })}
                    </ul>
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default CartLogin;