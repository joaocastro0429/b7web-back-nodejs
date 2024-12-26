import { Prisma } from "@prisma/client"
import { prisma } from "../../libs/prisma"
import { title } from "process"

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
    let page = 4
    let skip = (page - 1) * 2
    const user = await prisma.user.findFirst({
        skip:skip,
        take:2
        // orderBy:[
        //     {
        //         id:"desc"
        //     },
        //     {
        //         name:"asc"
        //     }
        // ]
        
    //  where:{
    //     posts:{
    //         every:{
    //             title:{contains:"primeiro"}
    //         }
    //     }
    //  }
        
        // where:{
        //     email
        // },
        // select:{
        //     id:true,
        //     name:true
        // }
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
            status:true,
            _count:{
                select:{
                    posts:true
            }
        }
        }
    })
    return user
}



