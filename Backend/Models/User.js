import mongoose from 'mongoose';
// import { use } from '../Routes/auth';
// import { Schema } from mongoose;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },

    //The enum keyword in Mongoose is used to define a set of predefined values for a schema field. This ensures that the field can only take one of the specified values. If a value outside the specified set is assigned, Mongoose will throw a validation error.

    role: { type: String, 
        enum:
         { 'values': ['admin', 'editor', 'user'], 
            'message': '{VALUE} is not a valid role' }, 
            default: 'user' }, // Role field

    date: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('user', userSchema);
// User.createIndexes();

export default User;