import express from 'express'
import {prisma} from '../libs/prisma'

import {createUser} from './services/User'

export const routes=express.Router()



routes.post("/user",async(req,res)=>{
    const user=await createUser({
        name:"marcos",
        email:"marcos@hotmail.com"
    })

    return res.status(201).json({user})


})