**Overview**

This is a small CRUD project built with Node.js, Express, MongoDB, and JWT for authentication. It allows users to register, log in, and manage a collection of movies with various operations like creating, reading, updating, and deleting movies

**Features**

	1.User Registration and Login
	
	2.JWT Authentication
	
	3.Create, Read, Update, and Delete (CRUD) operations for movies
	
	4.Pagination support for fetching movies

**Technologies Used**
	
	1.Node.js
	
	2.Express.js
	
	3.MongoDB
	
	4.Mongoose
	
	5.JSON Web Token (JWT)
	
	6.Bcrypt.js
	
	7.dotenv
	
	8.Pgination

**Installation Guide**

	1. Clone the Repository 
	2. Install Dependencies -- Node.js and npm,MongoDB,express,mongoose,jsonwebtoken,bcryptjs,dotenv,body-parser
	3. Set Up Environment Variables(.env) --> PORT=8000 >> MONGO_URI=mongodb://localhost:27017/Operation >> JWT_SECRET=Hello_Team_IDS
	4. Start MongoDB
	5. Start the Application

**API Endpoints
Authentication**

	1.Register a new user
 
	URL: /api/auth/register
	Method: POST
 
	2.Login user
 
	URL: /api/auth/login
	Method: POST
 
	3.Movies
 
	Create a new movie
	URL: /api/movie/create
	Method: POST
 
	4.Fetch all movies with pagination
 
	URL: /api/movie/getAllMovies?page=1&limit=10
	Method: GET
 
	5.Get movie by ID
 
	URL: /api/movie/getById/:id
	Method: GET
 
	6.Update movie by ID
 
	URL: /api/movie/update/:id
	Method: PUT
 
	7.Delete movie by ID
 
	URL: /api/movie/delete/:id
	Method: DELETE
   
   
