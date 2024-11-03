import express from 'express'
import 'dotenv/config'
import path from 'path'
import {route} from './routes/User'


const server=express()

server.use(express.json())
server.use(express.static(path.join(__dirname,'../public')))
server.use(express.urlencoded({extended:true}))

server.use(route)




server.listen(process.env.PORT)