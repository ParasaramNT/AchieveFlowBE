import express, {Express, Response, Request} from "express";
import dotenv from "dotenv";
dotenv.config()
import dbConnect from "./config/mongoose";

const PORT = process.env.PORT ||  8000;

const app: Express = express();

app.listen(PORT, ()=>{
    console.log(`App listening in PORT on ${PORT}`);
})

app.get("/", (req: Request, res: Response)=> {
    res.send(`<h1>TPN first</h1>`)
})

dbConnect();

import goalsRoute from "./routes/goalsRoute";
import userRoute from "./routes/userRoute";

app.use("/api/auth", userRoute);
app.use("api/goals", goalsRoute);