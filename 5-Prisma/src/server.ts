import express from 'express'
import 'dotenv/config'
import path from 'path'
import {mainRouter} from './routes/main'


const server=express()

server.use(express.json())
server.use(express.static(path.join(__dirname,'../public')))
server.use(express.urlencoded({extended:true}))

server.use(mainRouter)




server.listen(process.env.PORT)