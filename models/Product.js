import mongoose  from "mongoose";

const ProductSchema = new mongoose.Schema ({
    title:{
        type: String,
        required: true,
    },
    desc:{
        type:String,
        required:true

    },
    company:{
        type:String,
        required:true,
    },
    img1:{
        type:String,
        required :true
    },
    img2:{
        type:String,
        required: true,
    },
    categories:{type: Array},
    subcategories:{type:Array},
    size:{type: Array},
    color:{type:Array},
    price:{
    type: Number, 
    required:true
    },
    type:{
        type: String,
        required: true
    },
    inStock :{
        type: Boolean,
        default: true
    },
},
    {timestamps: true}
)

const Product = mongoose.model("product",ProductSchema);

export default Product;