"use client"

import getProducts from '@/helpers/getProducts'
import { addCart } from '@/helpers/cartFunctions'
import { useEffect, useState } from 'react'
import { IProduct } from '@/app/types'

function Page({ params }: { params: any }) {
  const { slug } = params
  const [product, setProduct]=useState<IProduct>()

  useEffect(() => {
    const fetchProducts = async () => {
        const products = await getProducts();
        setProduct(products[slug-1]);
    };

    fetchProducts();
}, []);


  return (
    <>
      <h2 className="ml-10 mt-10 border-l-8 text-2xl font-bold pl-10 border-orange-600">PRODUCTS</h2>
      <div className='flex place-content-center'>
      {product?
      <div className='flex flex-wrap place-content-around m-10 py-10 bg-gray-800 rounded-xl'>
      <div className='flex px-5'>
      <img src={product.image} alt={product.name} className='rounded-xl max-w-96 max-h-96 max-md:h-60 max-md:w-60'/>
      </div>
      <div className='grid w-3/5 max-md:w-4/5'>
        <h1 className='text-xl font-semibold my-5 md:text-2xl'>{product.name}</h1>
        <p className='md:text-lg'>{product.description}</p>
        <button onClick={()=>addCart(product)} className="flex place-self-end w-fit rounded-lg bg-orange-500 py-3 my-5 px-6 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:bg-green-500 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
        Add to Cart
        </button>
      </div>
      </div> 
      : ""}
      
    </div>
    </>
    
  )
}

export default Page