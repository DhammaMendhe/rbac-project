import express from 'express';
// import cors from 'cors';
import  connectToMongod from './db.js'
// Old CommonJS syntax
// const dotenv = require('dotenv');
// dotenv.config();

// New ESM syntax
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT ;

// const user

connectToMongod();
// app.use(express.json());
// app.use(cors())


//app.use() is used to connect middlware to join path

// app.use('/api/auth',require('./Routes/auth'))
// app.use('/api/notes',require('./Routes/notes'))

//middleware using for handle the json file


app.listen(PORT,()=>{
    console.log(`backend sever connected to ${PORT} successfully...`)
})