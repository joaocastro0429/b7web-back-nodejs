import express from 'express'
import helmet from 'helmet'

const server= express()

server.use(helmet())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.listen(3333,()=>{
    console.log('Servidor rodando: http://localhost:3000/');
})