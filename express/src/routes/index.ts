import express, { RequestHandler } from 'express'
import ProdutosRouter from './produtos'
import { interferir } from '../middlewares/interferir'
interferir
const router=express.Router()

 router.use('/produtos',ProdutosRouter)
router.use(interferir)
 
router.get("/ping",(req,res)=>{
    res.json({pong:true})
    
})

router.get("/",(req,res)=>{
    res.send("hello word")
    
})

export default router