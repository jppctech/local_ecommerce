import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        require: [true, "Please provide a user name!"]
    },
    last_name: {
        type: String,
        require: [true, "Please provide a user name!"]
    },
    email: {
        type: String,
        require: [true, "Please provide an email"]
    },
    password: {
        type: String,
        require: [true, "Please provide a password"]
    },
    cart_items: {
        type: Array,
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

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;