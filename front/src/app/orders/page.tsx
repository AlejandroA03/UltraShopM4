"use client"

import OrdersContainer from "@/components/OrdersContainer";

export default function Orders() {

    const token=(localStorage.getItem("userToken") ?? null)
    
    return (
        <OrdersContainer/>
    );
  }