import { IOrder } from "@/app/types";
import getOrders from "@/helpers/getOrders";

export default async function OrdersContainer() {

const orders:IOrder[]=await getOrders()

    return (
        <div className="m-5 flex flex-wrap place-content-center">
            {orders.map((order:IOrder)=>{
                order.date= new Date(order.date)
                const formDate= `${order.date.getDate()}/${order.date.getMonth()+1}/${order.date.getFullYear()}`
                return(
                    <div key={order.id}>
                    <h2>{order.status}</h2>
                    <h2>{formDate}</h2>
                    {order.products.map((product)=>{
                        return(
                            <h2 key={product.id}>{product.name}</h2>
                        )
                    })}
                    </div>
                )
            })}
        </div>
    );
  }