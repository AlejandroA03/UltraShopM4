"use client"

import { IProduct } from "@/app/types";
import {addCart} from "@/helpers/cartFunctions";
import Link from "next/link";

const ProductCard: React.FC<IProduct>=(product)=>{
    return(
        <div className="relative flex w-72 flex-col rounded-xl bg-gray-800 bg-clip-border shadow-md mx-3 my-6">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl text-white shadow-lg shadow-blue-gray-500/40">
                <img className="relative h-40 w-full brightness-75 hover:brightness-100" src={product.image} alt="Image"/>
            </div>
            <div className="p-6">
                <h5 className="mb-2 block text-xl text-white font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                US ${product.price}
                </h5>
                <h5 className="mb-2 block text-xl text-white font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {product.name}
                </h5>
            </div>
            <div className="p-6 pt-0">
            <button onClick={()=>addCart(product)} className="block w-2/3 rounded-lg bg-orange-500 py-3 px-6 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:bg-green-500 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            Add to Cart
            </button>
            <Link href={`/products/${product.id}`} className="block w-2/3 rounded-lg bg-gray-400 py-3 px-6 mt-2 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            See Details
            </Link>
            </div>
        </div>
    )
}

export default ProductCard;