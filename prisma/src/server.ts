import express from 'express'
import {routes} from './routes/User'


const server=express()
server.use(express.json())
server.use(express.urlencoded({extended:true}))

server.use(routes)


server.listen(process.env.PORT,()=>console.log("running server"))