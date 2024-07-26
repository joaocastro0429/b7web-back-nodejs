import express from 'express'

import {z} from 'zod'

export const router=express.Router()


router.post("/user",(req,res)=>{
    // validação de dados 
    const userShema=z.object({
        name:z.string().min(2),
        email:z.string().email(),
        age:z.number().min(18).max(120)

    })

    const result=userShema.safeParse(req.body)
    if(!result.success){
        return res.status(200).json({message:"dados invalidos"})

    }
    console.log("carregando....")
    return res.status(200).json({message:"tudo ok"})



})

router.get("/user",(req,res)=>{
   return res.json({pong:true})
})