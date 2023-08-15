import express from "express"
import { payment } from "../Controllers/stripeRoutes.js";



const stripeRoutes = express.Router();


stripeRoutes.post('/payment',payment)


export default stripeRoutes;