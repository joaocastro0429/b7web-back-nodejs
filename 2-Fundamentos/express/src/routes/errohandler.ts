import { ErrorRequestHandler, RequestHandler } from "express"

export const notFoundResquest:RequestHandler=(req,res)=>{
    res.status(404).json({error:'route not found'})

}

export const errohandler:ErrorRequestHandler=(err,req,res,next)=>{
    res.status(500).json({error:'Ocorreu um Error'})


}