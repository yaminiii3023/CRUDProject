
/* jshint asi:true */  

import bodyParser from "body-parser"
import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import AuthRoutes from "./routes/AuthRoutes.js"; //importing authentication routes which have post api for register and login for users
import routes from "./routes/MovieRoutes.js"; //importing movie entity routes which having all the APIs

//initailize express app
const app = express();

app.use(bodyParser.json())
dotenv.config()
const PORT = process.env.PORT||5000
const MONGOURI = process.env.MONGO_URI


//connection with db 
mongoose.connect(MONGOURI).then(()=>
{
  console.log("db connected")
  app.listen(PORT,()=>
  {
    console.log("server is running")
  })
}).catch((error)=> console.error("Database connection error:", error))


//url for postman "http://localhost:8000/api/movie/","http://localhost:8000/api/auth/" for checking outputs
 app.use("/api/movie",routes)
 app.use('/api/auth', AuthRoutes);
