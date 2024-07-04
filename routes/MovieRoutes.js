/* jshint asi:true */
/* jshint esversion: 8 */

//importing 
import express from "express";
import { createMovie, deleteMovie, fetchMovie, getById, updateMovie } from "../Controllers/MovieController.js";
import { authMiddleware } from "../middleware/auth.js";

const route = express.Router();

//all the APIs for movie entity with the JWT authentication 
route.get("/getAllMovies",authMiddleware,fetchMovie)
route.post("/create",authMiddleware,createMovie)
route.put("/update/:id",authMiddleware,updateMovie)
route.delete("/delete/:id",authMiddleware,deleteMovie)
route.get("/getById/:id",authMiddleware,getById)

export default route;