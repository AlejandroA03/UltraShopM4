import axios from "axios";

const POSTORDER_URL=process.env.NEXT_PUBLIC_API_URL

async function postOrder(products:any) {
    
    const token=await localStorage.getItem('userToken')
    try {
        const response=await axios.post(`${POSTORDER_URL}/orders`, { products: products }, {headers: {Authorization: token}})
    } catch (error) {
        throw error
    }
}

export default postOrder;