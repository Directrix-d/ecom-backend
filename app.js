import express from "express";
import dotenv from "dotenv"
import Connection from "./database/db.js";
import Proroutes from "./routes/Proroutes.js"
import cors from "cors"
import Product from "./models/Product.js";
import User from "./models/User.js"
import authRoutes from "./routes/authRoutes.js";
import stripeRoutes from "./routes/stripeRoute.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/product',Proroutes)
app.use('/auth',authRoutes)
app.use('/checkout',stripeRoutes)
app.get('/',function(req,res){
    res.status(200).send("Server Working")
})




Connection();


//   (async function newProduct(){
//     let  nProduct = {
//         title: "Top",
//         desc: "Women's Olive Green & White Tie & Dye Co-ordinates" ,
//         company: "Campus Sutra",
//         img1: "https://images.bewakoof.com/t1080/women-s-olive-green-white-tie-dye-co-ordinates-603851-1689664349-1.jpg",
//         img2: "https://images.bewakoof.com/t1080/women-s-olive-green-white-tie-dye-co-ordinates-603851-1689664354-2.jpg",
//         categories: ["women"],
//         subcategories: ["T-Shirts"],
//         size: ["Small", "Medium", "Large"],
//         color: ["Blue", "Black", "Pink","Green"],
//         price: 799,
//            type: "Most Sold",  

//         inStock: true,
//     }
//     let Prod = await Product.create(nProduct);

//   })()

// (async function newUser(){
//     let nuse = {
//         username: "john_doe",
//         email: "john@example.com",
//         password: "password123",
//         isAdmin: false 
//     }

//     let use = await User.create(nuse)
// })()



const port = process.env.PORT
app.listen(port,()=>{
    console.log("Server is Running")
})