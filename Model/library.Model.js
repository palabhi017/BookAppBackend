const mongoose = require("mongoose")


const librarySchema = mongoose.Schema({
    image: String,
    title: String,
    category: String,
    userId: String
   
})

const libraryModel = mongoose.model("libraryBook",librarySchema)

module.exports = {libraryModel}