import mongoose from "mongoose";

//Defining the schema for login purpose which factors considered for login and register
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

export default mongoose.model("User", UserSchema);
