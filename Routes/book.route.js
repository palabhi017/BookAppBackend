const {bookModel} = require("../Model/book.model")
const express = require("express")
const jwt = require('jsonwebtoken');
const {authenticate} = require("../Middleware/auth.middleware");
const loggerMiddleware = require("../Middleware/logger.middleware");
const bookRouter = express.Router()


bookRouter.post("/add",async(req,res)=>{
    try {
      await bookModel.insertMany(req.body)
      
      res.status(200).json({"msg":"book added  successfully"})
    } catch (error) { 
      res.status(400).json({"err":"bad request"})
    }
 
  })
bookRouter.get("/:id",async(req,res)=>{
    const id = req.params.id
    try {
        const book = await bookModel.findById(id)
        res.send(book)
    } catch (error) {
        console.log(error)
        res.send("bad Request")
    }
})
bookRouter.get("/user/:id",async(req,res)=>{
    const id = req.params.id
    try {
        const book = await bookModel.find({userId:id})
        res.send(book)
    } catch (error) {
        console.log(error)
        res.send("bad Request")
    }
})

  bookRouter.get("/",async(req,res)=>{
    try {
        const q = {}
        const s ={}
        console.log(req.query)
       
      
        if(req.query.category){
            q.category = req.query.category
        }
       
       
        if(req.query.search){
            q.title = { $regex: req.query.search, $options: 'i' }
        }

    const books = await bookModel.find(q).sort(s)
    
    res.status(200).send(books)
    
    
    } catch (error) {
        res.status(400).json({"err":"bad request"})
        
    }
   
})

bookRouter.patch("/update/:id", loggerMiddleware,async(req,res)=>{
    const id = req.params.id
    const data = req.body
try {
    const new_data = await bookModel.findByIdAndUpdate({_id:id},data)
    res.status(200).json({"massage":"Data Updated successfully"})
} catch (error) {
    res.status(400).json({"err":"bad request"})
}
   
})

bookRouter.delete("/delete/:id", async(req,res)=>{
    try {
        const id = req.params.id
        const new_data = await bookModel.findByIdAndDelete({_id:id})
        res.status(200).json({"massage":"Data Deleted successfully"})
    } catch (error) {
         res.status(400).json({"err":"bad request"})  
    }

})

module.exports = {bookRouter}