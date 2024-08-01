import { Prisma } from '@prisma/client'
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

export const createUsers=async(users:Prisma.UserCreateInput[])=>{
    const createMany = await prisma.user.createMany({
        data: [
          { name: 'Bob', email: 'bob@prisma.io' },
          { name: 'Bobo', email: 'bob@prisma.io' }, // Duplicate unique key!
          { name: 'Yewande', email: 'yewande@prisma.io' },
          { name: 'Angelique', email: 'angelique@prisma.io' },
        ],
        skipDuplicates: true as never, // Skip 'Bobo'
      })

    return createMany
    }
