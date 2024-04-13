import { IProduct, IProductOnCart } from "@/app/types";

let Cart:IProductOnCart[]=[]


export const addCart=(product:IProduct)=>{
    let quantity=1

    if(localStorage.cart){
        Cart=JSON.parse(localStorage.cart)
        for(let i=0;i<Cart.length;i++){
            if (product.id===Cart[i].id){
                let newQuantity=Cart[i].quantity+1
                Cart[i]={...Cart[i], quantity:newQuantity}
                localStorage.setItem("cart",JSON.stringify(Cart))
                return undefined
            }
        }
        Cart.push({...product,quantity})
    }else{
        Cart.push({...product,quantity})
    }
    localStorage.setItem("cart",JSON.stringify(Cart))
    return undefined
}

export const removeItem=(id:number)=>{
    if(localStorage.cart){
        Cart=JSON.parse(localStorage.cart)
    }
    Cart=Cart.filter((item:any)=>item.id!==id)
}



