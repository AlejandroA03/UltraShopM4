import { IProduct, IProductOnCart } from "@/app/types";

export const addCart=(product:IProduct)=>{
    let quantity=1
    let Cart:IProductOnCart[]=[]

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

export const removeItem=(id:number | undefined)=>{
    let Cart=[]
    if(localStorage.cart){
        Cart=JSON.parse(localStorage.cart)
    }
    Cart=Cart.filter((item:any)=>item.id!==id)
    localStorage.setItem("cart",JSON.stringify(Cart))
    return undefined
}

export const cartTotal =()=>{
    let Cart=[]
    let total=0
    if(localStorage.cart){
        Cart=JSON.parse(localStorage.cart)
        for(let i=0;i<Cart.length;i++){
            total=total+(Cart[i].price*Cart[i].quantity)
        }
    }
    return total
}



