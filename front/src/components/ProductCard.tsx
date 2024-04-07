import { IProduct } from "@/app/types";

const ProductCard: React.FC<IProduct>=({ name, price, image, categoryId, stock, description })=>{
    return(
        <div className="relative flex w-72 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-3 my-6">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <img src={image} alt="Imagen" width="288" height="160"/>
            </div>
            <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                US ${price}
                </h5>
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {name}
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                {description}
                </p>
            </div>
            <div className="p-6 pt-0">
            <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            Agregar al carrito
            </button>
            </div>
        </div>
    )
}

export default ProductCard;