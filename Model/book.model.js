const mongoose = require("mongoose")


const bookSchema = mongoose.Schema({
    image: String,
    title: String,
    category: String,
   userId :String
   
})

const bookModel = mongoose.model("book",bookSchema)

module.exports = {bookModel}