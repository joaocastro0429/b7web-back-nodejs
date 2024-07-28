import {prisma} from '../../libs/prisma'

type createUserPros={
    name:string,
    email:string,

}


export const createUser=async({name,email}:createUserPros)=>{
    const user= await  prisma.user.create({
        data:{
            name,
            email
        }
    
    })

    return user
    

}