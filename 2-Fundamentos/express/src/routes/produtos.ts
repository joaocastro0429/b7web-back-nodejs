import express from 'express'


 const router =express.Router()





router.get("/",(req,res)=>{
    res.send({produtos:[]})
    
})

router.get("/:id",(req,res)=>{
    console.log(req.params)
    res.json({name:"mouse",price:90})
    
})


export default router





