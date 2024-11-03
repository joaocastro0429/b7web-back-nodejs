import {Router} from 'express'

export const route=Router()

//Routes

route.get("/ping",(request,response)=>{
    return response.json({message:"pong"})
})


