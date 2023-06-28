const { authenticate } = require("../Middleware/auth.middleware")
const {ratingModel} = require("../Model/rating.model")
const express = require("express")
const ratingRouter = express.Router()

ratingRouter.get("/:id",async(req,res)=>{
    try {
     const id = req.params.id
       let sum=0 
       const rating = await ratingModel.find({bookId:id})
        for(let i=0;i<rating.length;i++){
           sum+= Number(rating[i].rating)
        }
        let avgRating= sum/rating.length
    res.json({"rating":avgRating})

} catch (error) {
        res.status(400).json({"err":"bad request"})
        
    }
   
})

ratingRouter.post("/add",authenticate,async(req,res)=>{
    const item = req.body
    try {
       await ratingModel.insertMany(item)

    res.send("rating added successfully")

} catch (error) {
        res.status(400).json({"err":"bad request"})
        
    }
   
})

module.exports = {ratingRouter}