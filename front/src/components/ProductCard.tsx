import { IProduct } from "@/app/types";
import Link from "next/link";

const ProductCard: React.FC<IProduct>=({id, name, price, image})=>{
    return(
        <div className="relative flex w-72 flex-col rounded-xl bg-gray-700 bg-clip-border text-gray-700 shadow-md mx-3 my-6">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl text-white shadow-lg shadow-blue-gray-500/40">
                <img className="relative h-40 w-full brightness-75" src={image} alt="Image"/>
            </div>
            <div className="p-6">
                <h5 className="mb-2 block text-xl text-white font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                US ${price}
                </h5>
                <h5 className="mb-2 block text-xl text-white font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {name}
                </h5>
            </div>
            <div className="p-6 pt-0">
            <button className="block w-2/3 rounded-lg bg-blue-500 py-3 px-6 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            Add to Cart
            </button>
            <Link href={`/products/${id}`} className="block w-2/3 rounded-lg bg-gray-400 py-3 px-6 mt-2 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            See Details
            </Link>
            </div>
        </div>
    )
}

export default ProductCard;