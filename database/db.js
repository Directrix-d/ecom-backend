import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const Mongo_Url = process.env.mongoUrl


const Connection = () =>{

    mongoose.connect(Mongo_Url).then(function(){
        console.log("DB Connected")
    }).catch(function(error){
        console.log("Connection error :", error)
    })
    
    }

    export default Connection;



