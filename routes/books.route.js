const express = require("express");
require('dotenv').config();
const { Router } = require("express");
const { BookModel } = require("../models/books.model");
const bookRoute = Router();

bookRoute.get("/",async(req,res)=>{
    const books = await BookModel.find()
    res.send(books);
})

bookRoute.get("/:id",async(req,res)=>{
    const id = req.params.id;
    const book = await BookModel.find({"_id":id});
    res.send(book);
})

bookRoute.post("/",async(req,res)=>{
    const payload = req.body;
    try{
        const post = await BookModel.insertMany(payload);
        
        res.send(post);
    }
    catch(err){
        console.log(err);
        res.send("err");
    }
})

bookRoute.patch("/:id",async(req,res)=>{
    const payload = req.body;
    const id = req.params.id;
   
    try{
        await BookModel.findByIdAndUpdate({"_id":id},payload);
        res.send("Updated the product")
       
    }
    catch(err){
        console.log(err);
        res.status(404);
        res.send({error:"note doesn't exsist"})
    }
})

bookRoute.delete("/:id",async(req,res)=>{
    const payload = req.body;
    const id = req.params.id;
    try{
        
            await BookModel.findByIdAndDelete({"_id":id});
            res.send("product removed");
       
    }
    catch(err){
        console.log(err);
        res.status(404);
        res.send({error:"product doesn't exsist"})
    }
})

module.exports={
    bookRoute
}