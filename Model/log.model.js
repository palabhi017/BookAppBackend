const mongoose = require("mongoose")


const logSchema = mongoose.Schema({
   
    id: String, 
    timestamp: { type: Date, default: Date.now },
    previousData: {
      title: String,
      image: String,
      category: String,
      userId:String
    },
    newData: {
      title: String,
      image: String,
      category: String,
      userId:String
    },
   
})

const logModel = mongoose.model("log",logSchema)

module.exports = {logModel}