import express from "express"
import user from "./Models/userSchema.js"
import mongoose from "mongoose"

const app = express()
const port = 8080

mongoose.connect("mongodb+srv://iamsubhankarray:iamtheknight@cluster0.nvqbu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/user")
    .then(console.log("db connected"))
    .catch(error => console.log("error while connecting to db "))

app.use(express.urlencoded({ extends: true }))



app.get("/", (req, res) => {
    res.send('<h1>home route</h1>')

})
app.post("/register", async (req, res) => {
    const { name, email, password, mobile, address } = req.body
    try {
        await user.create({
            name,
            email,
            password,
            address,
            mobile,
        })
        res.send("registered successfully")
    } catch (error) {
        console.log(error);
        res.send("unseccessfull")


    }


}

)



app.post("/login", async (req, res) => {
    const { email, password } = req.body
    const verifyUser = await user.findOne({ email, password, })
    if (!verifyUser) {
        res.json({ message: "user not found,Please Register", redirect: "no" })

    } else {
        res.json({ message: "login successfull", verifyUser, redirect: "OK" })
        // console.log(verifyUser);


    }

})





app.listen(port, () => {
    console.log(`server started on: ${port}`);

})