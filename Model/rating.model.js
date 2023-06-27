const mongoose = require("mongoose")


const ratingSchema = mongoose.Schema({
   bookId: String,
   userId: String,
   rating: Number
   
})

const ratingModel = mongoose.model("rating",ratingSchema)

module.exports = {ratingModel}