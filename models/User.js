import mongoose from "mongoose"; 


const UserSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            requied:true
        },
        email:{
            type:String,
            required: true,
            unique: true
        },
        password:{
            type:String,
            required: true
        },
        isAdmin:{
            type: Boolean,
            default: false
        },
    },
    {timestamps:true}
)

const User = mongoose.model("User",UserSchema);

export default User;