const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require("cors");
const {connection} = require("./config/db");
const { bookRoute } = require("./routes/books.route");

const app = express();
app.use(express.json());
app.use(cors({origin:"*"}));
app.use("/book",bookRoute)

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("connected");
    }
    catch(err){
        console.log(err);
    }
    console.log(`listening to port ${process.env.port}`)
})