import { Prisma } from "@prisma/client"
import { prisma } from "../../libs/prisma"

type createProps={
    name:string,
    email:string,
}

export const createUser=async (data:Prisma.UserCreateInput)=>{
    try{

        const user=await prisma.user.create({data})
        return user

    }catch(error){
        if(error instanceof Prisma.PrismaClientKnownRequestError){
            if(error.code==='P2002'){
            }
        }
        return false
    }
    
}

