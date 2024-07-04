/* jshint asi:true */
/* jshint esversion: 8 */
import Movie from "../model/MovieModel.js";

//creating movie and handling error if same title is already exist in DB
export const createMovie =async(req,res)=>{
    try{
        const MovieData = new Movie(req.body)
        const {title}= MovieData;

        const MovieExit = await Movie.findOne({title})
        if(MovieExit)
        {
            return res.status(400).json({error:"Movie alrady exits"})
        }
        const savedMovie = await MovieData.save()
        res.status(200).json(savedMovie)
    }catch(error)
    {
        res.status(500).json({error:"internal server not found"})
    }
}


 //fetch all the Movie from database
 export const fetchMovie = async (req, res) => {
    try {
        let page = parseInt(req.query.page) ;
        let limit = parseInt(req.query.limit) ;

         // Validate page and limit values 
         if (page < 1 || limit < 1) {
            return res.status(400).json({ error: "Invalid page or limit value. Must be greater than 0." });
        }
        
        const skip = (page - 1) * limit;

        const movies = await Movie.find()
            .skip(skip)
            .limit(limit);

        if (movies.length === 0) {
            return res.status(404).json({ message: "Movies not found in database" });
        }

        res.status(200).json({
            movies
        });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};




//get movies by their ID(MongoDB)
export const getById = async(req,res)=>
{
    try{
        const id=req.params.id
        const MovieExit=await Movie.findById(id);
        if(!MovieExit){
            return res.status(404).json({message:"Movie not found in database"})
        }
        res.status(200).json(MovieExit)
    }catch(error)
    {
        res.status(500).json({error:"internal server error"})
    }
}


//update Movies by their ID(MongoDB id)
    export const updateMovie =async(req,res)=>{
        try{
            const id=req.params.id;
            const MovieExit= await Movie.findOne({_id:id})
            if(!MovieExit){
                return res.status(404).json({message:"Movie not found in database"})
            }
            const updatedMovie = await Movie.findByIdAndUpdate(id,req.body,{new:true})
            res.status(201).json(updatedMovie)
        }catch(error) {
            res.status(500).json({error:"internal server error"})
        }
    
} 

//delete Movie by their ID(MongoDB id)
export const deleteMovie = async(req,res)=>{
    try{
        const id=req.params.id;
            const MovieExit= await Movie.findOne({_id:id})
            if(!MovieExit){
                return res.status(404).json({message:"Movie not found in database"})
            }
            await Movie.findByIdAndDelete(id)
            res.status(201).json({message:"Movie deleted successfully"})
    }catch(error)
    {
        res.status(500).json({error:"internal server error."})
    }
}