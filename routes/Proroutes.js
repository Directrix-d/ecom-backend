import express from "express"
import {findbyId, getProduct} from "../Controllers/product.js"

const Proroutes = express.Router();

Proroutes.get('/',getProduct)
Proroutes.get('/find/:id',findbyId)

export default Proroutes;