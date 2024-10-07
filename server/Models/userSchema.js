import  mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false,
    },
    email: {
        type: String,
        unique: [true, "email already exists"],
    },
    password: {
        type: String,
        required: true,
        unique: false
    },
    address: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true,
        unique: [true, "number already in use"]
    }

}, { timestamps: true },
    { Collection: "user" })
const user = mongoose.model("user", userSchema)
export default user