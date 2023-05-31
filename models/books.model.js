const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    title : String,
    author: String,
    genre:String,
    year:Number,
    pages:Number,
    description : String,
    image:String
}) 

const BookModel = mongoose.model("book",bookSchema);

module.exports={
    BookModel,
}