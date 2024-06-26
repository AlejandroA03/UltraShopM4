"use client"

import Link from "next/link"
import { usePathname, useRouter } from 'next/navigation'
import Image from "next/image"
import cartImage from "../../public/cart.png"
import { useState, useEffect } from "react"
import { IProductOnCart } from "@/app/types"
import { cartTotal, removeItem } from "@/helpers/cartFunctions"
import postOrder from "@/helpers/postOrder"
import { useUserContext } from "./UserProvider"



const links=[
    {name:"login", text:"Sign in", href:"/login"},
    {name:"register", text:"Register", href:"/register"}
]

const CartLogin: React.FC=()=>{

    const router=useRouter()
    const [cart, setCart]= useState(false)
    const [cartProducts, setCartProducts]=useState<IProductOnCart[]>([])
    const [total, setTotal] = useState(0)
    const {token, setToken}=useUserContext()

    useEffect(() => {
        const checkToken = async () => {
            const checkedToken = await localStorage.getItem('userToken');
            setToken(checkedToken);
        };

        checkToken();
    }, []);

    const handleLogout=()=>{
        setToken(null);
        localStorage.removeItem('userToken')
        router.push("/")
    }

    const handleCheckout= async()=>{
        if(token){
            let productsId=[]
            for(let i=0; i<cartProducts.length;i++){
                productsId.push(cartProducts[i].id)
            }
            await postOrder(productsId)
            localStorage.removeItem("cart")
            setCartProducts([])
            setTotal(0)
            alert("Thanks for your purchase!")
            window.location.replace("/orders")
        }else {
            window.location.replace("/login")
        }
        
    }

    const CartClick=()=>{
        setCart(true)
        if(localStorage.cart){
            setCartProducts(JSON.parse(localStorage.cart))
            setTotal(cartTotal)
        }else{
            setCartProducts([])
            setTotal(0)
        }
    }

    const remove=(id:number|undefined)=>{
        removeItem(id)
        setCartProducts(JSON.parse(localStorage.cart))
        setTotal(cartTotal)
        return undefined
    }

    const cartLeave=()=>{
        setCart(false)
    }


    const pathname= usePathname()
    return(
        <div className=''>
            <div className='w-full flex items-center justify-between flex-wrap bg-gray-900 border-b-2 border-gray-800'>
                {!token ? <ul>
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
                        <span className="text-xs cursor-pointer hover:brightness-75" onClick={handleLogout}>Log Out</span>
                    </ul>}
                <Image src={cartImage} width="30" alt="cart" className="mx-5 my-2 hover:cursor-pointer" onClick={CartClick}/>
                <div onMouseLeave={cartLeave} className={`${cart? "fixed h-full bg-gray-700 right-0 top-0 max-md:w-3/4 w-1/4 z-10 border-s-2 border-slate-500 rounded-sm": "hidden"}`}>
                    <button onClick={cartLeave} className="block size-7 rounded-lg bg-orange-500 m-5 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">X</button>
                    <ul>
                        {cartProducts.map((product:IProductOnCart)=>{
                            return(
                                <div key={product.id} className="m-3 flex border-b-2 border-slate-600">
                                    <img className="size-16 brightness-75 rounded-lg" src={product.image} alt="Image"/>
                                    <div className="block w-2/3 text-center">
                                        <h5 className="m-1 text-xs">{product.name}</h5>
                                        <h5 className="m-1 text-xs">US ${product.price}</h5>
                                        <h5 className="m-1 text-xs">Quantity:{product.quantity}</h5>
                                    </div>
                                    <button onClick={()=>remove(product.id)} className="block size-5 rounded-lg bg-orange-500 m-5 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">X</button>
                                </div>
                            )
                        })}
                    </ul>
                    {total?<div className="absolute bottom-10 w-28 mx-10 rounded-lg text-center">US ${total}</div>:""}
                    <button className="absolute bottom-4 w-28 mx-10 rounded-lg text-center bg-orange-500 disabled:bg-gray-400" disabled={cartProducts.length==0} onClick={handleCheckout}>Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default CartLogin;