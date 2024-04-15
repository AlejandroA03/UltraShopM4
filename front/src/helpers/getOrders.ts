import axios from "axios";

const GETORDERS_URL="http://localhost:3001/users/orders"

async function getOrders() {
    
    const token=await localStorage.getItem('userToken')
    try {
        const response=await axios.get(GETORDERS_URL, {headers: {Authorization: token}})
        return response.data
    } catch (error) {
        throw error
    }
}

export default getOrders;