import Link from "next/link";
import Image from "next/image";
import banner from "../../public/imagen-home.png"
import productsimage from "../../public/Multi-Product.png"
import applelogo from "../../public/images.jpg"
import appleproducts from "../../public/appleproducts.jpg"



export default function Home() {
  return (
    <div>
      <div className="w-full h-80">
        <Image src={banner} alt="image" className="w-full h-full object-cover brightness-75" />
      </div>
      <h2 className="ml-10 mt-10 border-l-8 text-xl font-bold pl-10 border-orange-600">EXPLORE OUR PRODUCTS</h2>
      <div className="flex flex-wrap w-full place-content-center">
        <div className="relative h-auto w-fit my-6 p-8 mx-3 place-content-center rounded-xl bg-gray-800 hover:brightness-110">
        <Link href="/products">
        <Image src={productsimage} alt="Image" className=" max-h-60 w-auto" />
        </Link>
        </div>
      </div>
      <h2 className="ml-10 mt-10 border-l-8 text-xl font-bold pl-10 border-orange-600">ABOUT US</h2>
      <div className="flex flex-wrap w-full place-content-center">
        <div className="relative flex h-72 min-w-80 w-1/3 my-6 mx-3 place-content-center rounded-xl bg-gray-800">
          <div className="w-full h-1/2 max-md:h-1/3">
            <Image src={applelogo} alt="image" className="w-full h-full object-cover brightness-75 rounded-xl" />
            <p className="text-md p-5">As an officially authorized Apple retailer, we take pride in offering you a curated selection of Apple products, from iPhones and iPads to MacBooks and Apple Watches.</p>
          </div>
        </div>
        <div className="relative flex h-72 min-w-80 w-1/3 my-6 mx-3 place-content-center rounded-xl bg-gray-800">
          <div className="w-full h-1/2 max-md:h-1/3">
            <Image src={appleproducts} alt="image" className="w-full h-full object-cover brightness-75 rounded-xl" />
            <p className="text-md p-5">Whether you are looking to upgrade your device or explore the newest innovations from Apple, we have got you covered!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
