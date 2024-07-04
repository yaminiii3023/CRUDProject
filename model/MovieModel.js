/* jshint asi:true */
/* jshint esversion: 8 */
import mongoose from "mongoose"

//Movie schmea comprises title,director,desc,release date 
const MovieSchema= new mongoose.Schema({
   title:{
       type:String,
       required:[true,'title is required'],
       maxlength :[100,'title cannot be >100 char'],
   },
   director:{
       type:String,
       required:[true, 'Director is required'],
   },
   description:{
       type:String,
       required:[true, 'Description is required'],
   },
   releasedate:{
    type:Date,
    required:[true, 'Release date is required'],
}

})

export default mongoose.model("Movies",MovieSchema)