import {Router} from 'express'
import {createUser,createUsers, getAllUsers, getUserByEmail}from './services/User'
export const mainRouter=Router()

//Routes

mainRouter.get("/ping",(request,response)=>{
    return response.json({message:"pong"})
})

mainRouter.post('/user',async(request,response)=>{
    const user=await createUser({
        name:"marcos",
        email:"marcos1@exemplo.com",
        posts:{
            create:{
                title:"primeiro post",
                body:"corpo do primeiro post",
                subtitle:"subtitulo do primeiro post",
            }
        }
    })
     if(user){
        return response.status(200).json({user})
     }else{
        return response.status(500).json("aconteceu alguma coisa")
     }
})

mainRouter.post('/users',async(request,response)=>{
    const users=await createUsers([

        {name:"joao",email:"joao@email.com"},
        {name:"joao2",email:"joao@emmail.com"}
    ])
    return response.status(200).json({count:users})
})

mainRouter.get('/users',async(request,response)=>{
    const users = await getAllUsers()
    return response.status(200).json({users})
})

mainRouter.get('/user',async(request,response)=>{
    const user= await getUserByEmail('joao@email.com')
    return response.status(200).json({user})
})

