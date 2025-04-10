
import express from 'express'
// helmet faz uma seguraça para evitar invasão 
import helmet from 'helmet'
import path from 'path'
import router from './routes'
import {notFoundResquest,errohandler} from './routes/errohandler'

const server=express()
server.use(helmet())
server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use(express.static(path.join(__dirname,'../public')))


server.use('/',router)
server.use(notFoundResquest)
server.use(errohandler)

server.listen(3333)


