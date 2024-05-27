import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    user_name: {
        type: String,
        require: [true, "Please provide a user name!"]
    },
    emial: {
        type: String,
        require: [true, "Please provide an email"]
    },
    password: {
        type: String,
        require: [true, "Please provide a password"]
    },
    isVerfied: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.productDetails || mongoose.model("users", userSchema);

export default User;