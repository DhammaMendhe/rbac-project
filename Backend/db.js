import mongoose from 'mongoose'
// New ESM syntax
import dotenv from 'dotenv';
dotenv.config();



const url = process.env.DATABASE_URL
const connectToMongod = async () => {
    await mongoose.connect(url, {

    })

        .then(() => {
            console.log("connected sucessfully to database...");
        })

        .catch((error) => {
            console.log(error);
        })
}


export default connectToMongod;
