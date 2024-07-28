import express from 'express'
import dotenv from 'dotenv/config'

const server=express()

server.get("/",(req,res)=>{
    return res.json({msg:"Primeira com prisma"})
})


server.listen(process.env.PORT,()=>console.log("running server"))