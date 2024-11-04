import {Router} from 'express'
import { prisma } from '../libs/prisma'

export const mainRouter=Router()

//Routes

mainRouter.get("/ping",(request,response)=>{
    return response.json({message:"pong"})
})

mainRouter.post('/user',async(request,response)=>{
    const user=await prisma.user.create({
        data:{
            name: 'joao castro',
            email:"joao@exemple.com",


        }
    })
    return response.json(user)
})


