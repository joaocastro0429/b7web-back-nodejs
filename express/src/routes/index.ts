import express from 'express'
import ProdutosRouter from './produtos'
 const router=express.Router()

 router.use('/produtos',ProdutosRouter)
router.get("/ping",(req,res)=>{
    res.json({pong:true})
})

router.get("/",(req,res)=>{
    res.send("hello word")
    
})

export default router