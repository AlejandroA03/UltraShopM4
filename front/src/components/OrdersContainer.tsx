import React, { useState, useEffect } from 'react';
import { IOrder, IProduct } from "@/app/types";
import getOrders from "@/helpers/getOrders";

export default function OrdersContainer() {
    const [orders, setOrders] = useState<IOrder[]>([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const fetchedOrders = await getOrders();
            setOrders(fetchedOrders);
        };

        fetchOrders();
    }, []);

    return (
        <div className="m-5 flex flex-wrap place-content-center">
            {orders?
            orders.map((order: IOrder) => {
                console.log(order)
                console.log(order.products)
                order.date = new Date(order.date);
                const formDate = `${order.date.getDate()}/${order.date.getMonth() + 1}/${order.date.getFullYear()}`;
                return (
                    <div key={order.id} className='w-60 bg-gray-800 m-6 p-6 rounded-lg border-2 border-orange-500'>
                        <h2 className='uppercase font-semibold text-lg mb-2'>{order.status}</h2>
                        <h2 className='mx-3 mb-2'>{formDate}</h2>
                        {order.products.map((product:IProduct) => {
                            return (
                                <h2 key={product.id} className='font-thin'>{product.name}</h2>
                            );
                        })}
                    </div>
                );
            })
            : ""}
        </div>
    );
}