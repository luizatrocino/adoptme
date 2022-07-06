import { SignIn, User } from '../types';
import baseAPI from "./baseAPI"
import baseAPICreated from "./baseAPI"


export const cadastroUsuario = async (user:any) => {
    try {
        const response = await baseAPICreated.post("/user", user)       
        return response.data
    } catch (error: any) {
        return "Error: deu esse erro "+ JSON.stringify(error.response.data)
    }
}

export const loginUsuario = async (signIn: SignIn) => {
    try {
        const response = await baseAPI.post("/login", signIn)
        console.log(response.data);  
        return response.data
    } catch (error: any) {
        alert("Error:"+ error.response.data)
    }
}