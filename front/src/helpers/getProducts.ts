import { IProduct } from "@/app/types";

const GETPRODUCTS_URL= process.env.NEXT_PUBLIC_API_URL

const productsToPreLoad = [
    {
      id: 1,
      name: 'iPhone 11',
      image:
        'https://http2.mlstatic.com/D_NQ_NP_809326-MLA46115014340_052021-O.webp',
    },
    {
      id: 2,
      name: 'MacBook Air',
      image:
        'https://http2.mlstatic.com/D_NQ_NP_868385-MLA52463970075_112022-O.webp',
    },
    {
      id: 3,
      name: 'iPad Pro',
      image:
        'https://http2.mlstatic.com/D_NQ_NP_814559-MLA53970921150_022023-O.webp',
    },
    {
      id: 4,
      name: 'Apple Watch Series 6',
      image:
        '	https://http2.mlstatic.com/D_NQ_NP_733580-MLA72063241888_102023-O.webp',
    },
    {
      id: 5,
      name: 'AirPods Pro',
      image:
        '	https://http2.mlstatic.com/D_NQ_NP_606698-MLU74678792835_022024-O.webp',
    },
    {
      id: 6,
      name: 'HomePod mini',
      image:
        'https://http2.mlstatic.com/D_NQ_NP_800774-MLA45740145234_042021-O.webp',
    },
  ]

async function getProductsDB() {
    const res = await fetch(`${GETPRODUCTS_URL}/products`)
    const products: IProduct[] = await res.json()
    return products
}

async function getProducts() {
    const productsDB = await getProductsDB()
    const products = productsDB.map((product, index) => {
      return {
        ...product,
        image: productsToPreLoad[index].image,
      }
    })
    return products
}

export default getProducts;