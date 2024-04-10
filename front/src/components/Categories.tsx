"use client"
import filter from "@/helpers/filter";

const categories=[
    { name: 'Smartphones'},
    { name: 'Laptops'},
    { name: 'Tablets'},
    { name: 'Headphones'},
    { name: 'Cameras'},
    { name: 'Printers'},
    { name: 'Monitors'},
    { name: 'Storage'},
    { name: 'Accessories' }
]

const Categories: React.FC=()=>{
    return(
    <div className='flex items-center justify-between flex-wrap bg-gray-900 p-1 px-8 text-xs'>
        {categories.map((category)=>{
                return(<button key={category.name} onClick={filter}>{category.name}</button>)
            })}
    </div>
    )
}
export default Categories;