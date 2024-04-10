import getProducts from '@/helpers/getProducts'

async function Page({ params }: { params: any }) {
  const { slug } = params
  const product = await getProducts()
  const { name, description, image, price, stock, categoryId}= product[slug-1]

  return (
    <div className=''>
      <img src={image} alt={name} width={300} height={300}/>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{price}</p>
      <p>{stock}</p>
      <p>{categoryId}</p>
    </div>
  )
}

export default Page