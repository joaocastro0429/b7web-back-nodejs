import {createServer} from 'node:http'

const server=createServer((request,response)=>{
    let nome:string="joao"
    let idade:number=36
    response.end(`Ola Mundo , meu nome : ${nome} e tenho ${idade}`)
})


server.listen(3000,()=>{
    console.log('seridor carregando http://localhost:3000')
})