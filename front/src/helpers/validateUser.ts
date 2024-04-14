import { IRegister } from "@/app/types"

const emailRegExp=/\S+@\S+\.\S+/

const validateUser=({name, address, phone, email, password, confirmpassword}:IRegister)=>{
    const errors:any={}
    if(!name) errors.name= "Please enter your name!"
    else{
        if(name.trim().length < 5) errors.name="Name must be at least 5 characters long!"
    }
    if(!email) errors.email="You must enter an email address!"
    else{
        if(!emailRegExp.test(email)) errors.email="Invalid Email!"
    }
    if(!password) errors.password= "You must set a password!"
    else{
        if(password.trim().length < 5) errors.password="The password must be at least 5 characters long!"
    }
    if(!address) errors.address= "You must enter an address!"
    else{
        if(address.trim().length < 5) errors.password="The password must be at least 5 characters long!"
    }
    if(!phone) errors.phone= "You must enter a phone!"
    else{
        if(phone.trim().length < 9) errors.phone="Invalid phone number!"
    }
    if(confirmpassword !== password) errors.confirmpassword="Password does not match"

    return errors
}

export default validateUser;