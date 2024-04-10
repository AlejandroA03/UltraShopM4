import ProductCard from "@/components/ProductCard";
import { IProduct } from "@/app/types";
import getProducts from "@/helpers/getProducts";

const ProductsContainer:React.FC= async ()=>{
    
    const products=await getProducts()

    return(
        <div className="m-5 flex flex-wrap place-content-center">
        {products.map((product:IProduct)=>{
            return(
                <ProductCard 
                id={product.id}
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