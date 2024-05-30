
import express from 'express'
import helmet from 'helmet'
import path from 'path'
const server=express()
server.use(helmet())
server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use(express.static(path.join(__dirname,'../public')))


server.get("/",(req,res)=>{
    res.send("hello word")
    
})


server.get("/produtos/:id",(req,res)=>{
    console.log(req.params)
    res.json({name:"mouse",price:90})
    
})

server.get("/produtos",(req,res)=>{
    res.send({produtos:[]})
    
})

server.get("/ping",(req,res)=>{
    res.json({pong:true})
})

server.listen(3333)


