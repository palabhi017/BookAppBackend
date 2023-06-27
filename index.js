const express = require("express")
const {connection} = require("./db")
const mongoose = require("mongoose")
require("dotenv").config()
const cors = require("cors")
const app = express()
const {userRouter}  = require("./Routes/Auth.route")
const {bookRouter} =  require("./Routes/book.route")
const {libraryRouter} =  require("./Routes/library.route")
const { reviewRouter } = require("./Routes/review.route")
const { ratingRouter } = require("./Routes/rating.route")


const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.mongoURL);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error); 
      process.exit(1);
    }
  }

app.use(cors())
app.use(express.json())
app.use("/user",userRouter)
app.use("/book",bookRouter)
app.use("/library",libraryRouter)
app.use("/review",reviewRouter) 
app.use("/rating",ratingRouter) 




connectDB().then(() => {
    app.listen(process.env.port, () => {
        console.log("listening for requests");
    })
})
// app.listen(process.env.port,async()=>{
// try {
//     await connection
//     console.log("port is running")
// } catch (error) {
//     console.log(error)
// } 
// })