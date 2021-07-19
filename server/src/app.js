import express from "express";
import cors  from "cors";
import albumRouter  from "./routes";



const app  = express();

app.use(express.json())
app.use(cors())

app.use("/photos", albumRouter)

app.use("/", (req, res, next) => {
    res.status(200).json({message: "Welcome to album photos search API"})
    next()
})


export default app