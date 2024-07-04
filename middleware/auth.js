/* jshint asi:true */
/* jshint esversion: 11 */
import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    // Get the token from the request header
    const token = req.header("Authorization")?.replace("Bearer ", "");

    // Check if token is present
    if (!token) {
        return res.status(401).json({ error: "No token, authorization denied" });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach user info to the request object
        req.user = decoded.userId;
        
        // Move to the next middleware or route handler
        next();
    } catch (error) {
        // Respond with an error if the token is invalid
        res.status(401).json({ error: "Token is not valid" });
    }
};
