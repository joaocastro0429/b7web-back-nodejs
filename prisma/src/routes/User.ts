import express from 'express'
import {prisma} from '../libs/prisma'

export const routes=express.Router()



routes.post("/user",async(req,res)=>{
    const user=await prisma.user.create({
        data:{
            name:"joao castro",
            email:"joaocastro"
        }
        
    }) 
    return res.json({user}) 
    
})


