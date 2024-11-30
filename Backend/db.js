import mongoose from 'mongoose'
// Old CommonJS syntax
// const dotenv = require('dotenv');
// dotenv.config();

// New ESM syntax
import dotenv from 'dotenv';
dotenv.config();


const url = process.env.DATABASE_URL
console.log(url)
const connectToMongod = async () => {
    await mongoose.connect(url, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // serverSelectionTimeoutMS: 30000, // 30 seconds
        // socketTimeoutMS: 45000, // 45 seconds
    })
        // ,()=>{
        //         console.log("connected sucessfully to database...");

        // })
        .then(() => {
            console.log("connected sucessfully to database...");
        })
        .catch((error) => {
            console.log(error);
        })
}


export default connectToMongod;
