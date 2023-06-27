const mongoose = require("mongoose")


const reviewSchema = mongoose.Schema({
   bookId: String,
   userName: String,
   review: String
   
})

const reviewModel = mongoose.model("review",reviewSchema)

module.exports = {reviewModel}