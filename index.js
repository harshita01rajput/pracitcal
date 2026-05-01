// import mongoose from "mongoose";
// mongoose.connect("mongodb://localhost:27017/")
// .then(()=>console.log("connected to mongodb"))
// .catch((err)=>console.log("could not connect to mongodb",err));

const fs = require("fs");

fs.readFile("./input.txt","utf-8",(err,data)=>{
    if(err){
        console.log("error reading file");
        return;  
    }
    
    const lines= data.split("\n").length;
    const words= data.trim().split(/\s+/).length;

    fs.writeFile("output.txt","total lines:"+lines+"\ntotal words:"+words,(err)=>{
        if(err){
            console.log("error while writing");
            return;
        }

        console.log("Done file Reading and writing");


    });
}); 