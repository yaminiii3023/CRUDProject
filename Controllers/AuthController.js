/* jshint asi:true */  //for ignoring warning from JShint 
/* jshint esversion: 8 */ //some features are in esversion 6 and 8 so i mention manually
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../model/UserModel.js";

// Register new user
export const registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create new user
        const newUser = new User({
            username,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

// Login user
export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        // Create token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1h"
        });

        res.status(200).json({ token }); //succesfully token creation
    } catch (error) {
        res.status(500).json({ error: "Internal server error" }); // if there is an error in code 
    }
};
