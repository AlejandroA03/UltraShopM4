export interface IProduct {
    id?: number
    name: string
    description: string
    price: number
    stock: number
    image: string
    categoryId: number
}

export interface ICategory{
    name: string
}

export interface IProductOnCart {
    id?: number
    name: string
    description: string
    price: number
    stock: number
    image: string
    categoryId: number
    quantity:number
}

export interface IRegister{
    [key: string]: any;
    name:string,
	email:string,
	password:string,
	address:string,
	phone:string,
    confirmpassword?:string
}

export interface IOrder{
    id?:number
    status:string,
    date: Date,
    products:IProduct[]
}

export interface ILogin{
    email:string,
    password:string
}