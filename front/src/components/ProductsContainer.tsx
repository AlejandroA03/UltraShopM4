"use client"
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios"
import { IProduct } from "@/app/types";

const GETPRODUCTS_URL= "http://localhost:3001/products"

const ProductsContainer:React.FC=()=>{
    
    const [products, setProducts]=useState([])
  
    useEffect(()=>{
        axios.get(GETPRODUCTS_URL)
        .then(response => response.data)
        .then(data=> setProducts(data))
        }, [])

    return(
        <div className="m-5 flex flex-wrap place-content-center">
        {products.map((product:IProduct)=>{
            return(
                <ProductCard 
                key={product.name}
                name={product.name}
                description={product.description}
                price={product.price}
                stock={product.stock}
                image={product.image}
                categoryId={product.categoryId} />
                )
            })
        }
        </div>
)}

export default ProductsContainer