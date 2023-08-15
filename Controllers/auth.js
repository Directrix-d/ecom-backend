import User from "../models/User.js ";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken"


export const register = async(req,res) =>{
   try{
const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
        req.body.password,
        "asdfghjk"
    ).toString(), 
});
//   const payload = req.body
//   const newUser = new User(payload)
//    console.log(payload)
    const saveUse = await newUser.save()
    res.status(200).json(saveUse)
}catch(err){
    res.status(400).json(err.message)
}

}

export const login = async(req,res) =>{
    try{
        const user = await User.findOne({
            email:req.body.email
        })
       
        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            "asdfghjk"
        )
        const orignalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        const inputPassword =  req.body.password;
        orignalPassword != inputPassword && res.status(401).json("Wrong Password");
        const accessToken = jwt.sign(
            {
              id: user._id,
              isAdmin: user.isAdmin,
            },
            "gfcvhbjnkm",
            { expiresIn: "2d" }
        
        )
        const { password, ...others } = user._doc;
        res.status(200).json({ ...others, accessToken });



    }catch(err){
        res.status(500).json(err);
    }

}
