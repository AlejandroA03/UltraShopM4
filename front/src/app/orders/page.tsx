"use client"
import OrdersContainer from "@/components/OrdersContainer";

export default function Orders() {

    return (
        <div className="h-[32.2rem]">
            <h2 className="ml-10 mt-10 border-l-8 text-2xl font-bold pl-10 border-orange-600">ORDERS</h2>
            <OrdersContainer/>
        </div>
    );
  }