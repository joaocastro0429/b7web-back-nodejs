import {Router} from 'express'
import {createUser,createUsers}from './services/User'
export const mainRouter=Router()

//Routes

mainRouter.get("/ping",(request,response)=>{
    return response.json({message:"pong"})
})

mainRouter.post('/user',async(request,response)=>{
    const user=await createUser({
        name:"marcos",
        email:"marcos1@exemplo.com",
    })
     if(user){
        return response.status(200).json({user})
     }else{
        return response.status(500).json("aconteceu alguma coisa")
     }
})

mainRouter.post('/users',async(request,response)=>{
    const users=await createUsers([])
    return response.status(200).json({ok:true})
})



