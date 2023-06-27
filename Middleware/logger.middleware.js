const {bookModel} = require("../Model/book.model")
const {logModel} = require("../Model/log.model")

const loggerMiddleware = async (req, res, next) => {
    try {
     
      const id = req.params.id;
      const previousData = await bookModel.findById(id);
      
      next();
     
    const logEntry = new logModel({
       
        id,
        previousData,
        newData: req.body, 
      });
  
      await logEntry.save();
     
    } catch (error) {
      
      console.error('Error in logger middleware:', error);
   
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  module.exports = loggerMiddleware;