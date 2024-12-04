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

    role: {

        type: String,
        enum: ['admin', 'editor', 'user'],
        default: 'user'

    },
    permissions: {

        create: { type: Boolean, default: false },
        read: { type: Boolean, default: true },
        update: { type: Boolean, default: false },
        delete: { type: Boolean, default: false }

    },
    date: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('user', userSchema);
// User.createIndexes();

export default User;