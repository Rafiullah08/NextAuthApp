import mongoose, { Schema  } from "mongoose";


const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : [true, "Please provide username"],
        unique: true
    },
    email : {
        type : String,
        required : [true, "Please provide email"],
        unique: true
    },
    password : {
        type : String,
        required : [true, "Please provide password"],   
    },
    isVerified : {
        type : Boolean,
        default : false 
    },
    isAdmin : {
        type : Boolean,
        default : false 
    },
    
    forgotPasswordToken : String,
    forgotPasswordTokenExpiry : Date,
    verifyToken : String,
    verifyTokenExpiry : Date,

})

const User = mongoose.models.users || mongoose.model("user", userSchema)

export default User