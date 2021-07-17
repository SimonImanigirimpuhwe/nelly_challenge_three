import express from "express";
import cors  from "cors";
import albumRouter  from "./routes";



const app  = express();

app.use(express.json())
app.use(cors())

app.use("/photos", albumRouter)


export default app