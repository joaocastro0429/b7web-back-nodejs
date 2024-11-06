import {Router} from 'express'
import {createUser}from './services/User'
export const mainRouter=Router()

//Routes

mainRouter.get("/ping",(request,response)=>{
    return response.json({message:"pong"})
})

mainRouter.post('/user',async(request,response)=>{
    const user=await createUser({
        name:"joao castro",
        email:"marcos@exemplo.com",
        status:true
    })
     if(user){
        return response.status(200).json({user})
     }else{
        return response.status(500).json("aconteceu alguma coisa")
     }
})



