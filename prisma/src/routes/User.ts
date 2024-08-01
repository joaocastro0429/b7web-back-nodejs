import express from 'express'
import {prisma} from '../libs/prisma'

import {createUser, createUsers} from './services/User'

export const routes=express.Router()



routes.post("/user",async(req,res)=>{
    const user=await createUser({
        name:"marcos",
        email:"marcos@hotmail.com"
    })
    if(user){
        res.status(201).json({user})
    }else{
        res.status(400).json({error:"E-mail já cadastrado"})
    }

})

routes.post("/users",async(req,res)=>{
    const users=await createUsers([])
    res.json({ok:true})

})