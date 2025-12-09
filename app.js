import mongoose from "mongoose";

const MONGO_URI = "mongodb://localhost:27017/recipe"

mongoose.connect (MONGO_URI)
    .then(()=> console.log('Connected to database'))
    .catch(err => console.error(err));