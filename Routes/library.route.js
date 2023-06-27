const {libraryModel} = require("../Model/library.Model")
const express = require("express")
const jwt = require('jsonwebtoken');
const {authenticate} = require("../Middleware/auth.middleware")
const libraryRouter = express.Router()


libraryRouter.get("/:id",async(req,res)=>{
    try {
     const id = req.params.id
        const book = await libraryModel.find({userID:id})
    res.send(book)

} catch (error) {
        res.status(400).json({"err":"bad request"})
        
    }
   
})

libraryRouter.post("/add",async(req,res)=>{
    const item = req.body
    try {
       await libraryModel.insertMany(item)

    res.send("Item added successfully")

} catch (error) {
        res.status(400).json({"err":"bad request"})
        
    }
   
})

libraryRouter.patch("/update/:id", async(req,res)=>{
    const id = req.params.id
    const data = req.body
try {
    const new_data = await libraryModel.findByIdAndUpdate({_id:id},data)
    res.status(200).json({"massage":"Data Updated successfully"})
} catch (error) {
    res.status(400).json({"err":"bad request"})
}
   
})

libraryRouter.delete("/delete/:id", async(req,res)=>{
    try {
        const id = req.params.id
        const new_data = await libraryModel.findByIdAndDelete({_id:id})
        res.status(200).json({"massage":"Data Deleted successfully"})
    } catch (error) {
         res.status(400).json({"err":"bad request"})  
    }

})

libraryRouter.delete("/deleteall/:id", async(req,res)=>{
    try {
        const id = req.params.id
        const new_data = await libraryModel.deleteMany({userID:id})
        res.status(200).json({"massage":"Data Deleted successfully"})
    } catch (error) {
         res.status(400).json({"err":"bad request"})  
    }

})



module.exports = {libraryRouter}