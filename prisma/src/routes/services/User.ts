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

export const createUsers=async (users:Prisma.UserCreateInput[])=>{
    const result=await prisma.user.createMany({
        data:users,
        skipDuplicates:true
    })
}

export const getAllUsers=async ()=>{
    const users=await prisma.user.findMany({})
    return users
}

export const getUserByEmail= async (email:string)=>{
    const user = await prisma.user.findFirst({
        where:{
            email
        },
        select:{
            id:true,
            name:true
        }
    })
    return user
}
//  fanzendo filtragem 
export const findByEmail = async (email:string)=>{
    const user = await prisma.user.findFirst({
        where:{
            OR:[
                {email},
                {name:{contains:email}},
                {name:{endsWith:email}},
                {name:{startsWith:email}}
            ]
            
        },
        select:{
            id:true,
            name:true,
            email:true,
            status:true
        }
    })
    return user
}



