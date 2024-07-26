import express from 'express'
import {router} from './zod'

const server=express()
server.use(express.json())
server.use(express.urlencoded({extended:true}))

server.use('/api',router)

server.get("/",(req,res)=>{
    return res.json({pong:true})

})


server.listen(3333,()=>console.log('running server => http://localhost:3333'))