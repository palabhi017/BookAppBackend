const jwt = require('jsonwebtoken');
const {reviewModel} = require("../Model/review.model")
const express = require("express");
const { authenticate } = require('../Middleware/auth.middleware');
const reviewRouter = express.Router()

reviewRouter.get("/:id",async(req,res)=>{
    try {
     const id = req.params.id
        const book = await reviewModel.find({bookId:id})
    res.send(book)

} catch (error) {
        res.status(400).json({"err":"bad request"})
        
    }
   
})

reviewRouter.post("/add",authenticate,async(req,res)=>{
    const item = req.body
    try {
       await reviewModel.insertMany(item)

    res.send("review added successfully")

} catch (error) {
        res.status(400).json({"err":"bad request"})
        
    }
   
})

module.exports = {reviewRouter}