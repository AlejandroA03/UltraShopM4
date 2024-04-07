"use client"
import filter from "@/helpers/filter";

const categories=[
    { name: 'Smartphones', text: 'Smartphones' },
    { name: 'Laptops', text: 'Laptops' },
    { name: 'Tablets', text: 'Tablets' },
    { name: 'Headphones', text: 'Auriculares'},
    { name: 'Cameras', text:'Camaras' },
    { name: 'Printers', text:'Impresoras'},
    { name: 'Monitors', text:'Monitores' },
    { name: 'Storage', text:'Almacenamiento' },
    { name: 'Accessories', text:'Accesorios' }
]

const Categories: React.FC=()=>{
    return(
    <div className='flex items-center justify-between flex-wrap bg-teal-500 p-1 px-8 text-xs'>
        {categories.map((category)=>{
                return(<button key={category.name} onClick={filter}>{category.text}</button>)
            })}
    </div>
    )
}
export default Categories;