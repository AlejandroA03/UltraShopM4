import axios from "axios";

const GETORDERS_URL=process.env.NEXT_PUBLIC_API_URL

async function getOrders() {
    
    const token=await localStorage.getItem('userToken')
    try {
        const response=await axios.get(`${GETORDERS_URL}/users/orders`, {headers: {Authorization: token}})
        return response.data
    } catch (error) {
        throw error
    }
}

export default getOrders;