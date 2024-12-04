import express from "express";
import User from "../Models/User.js"
const router = express.Router()
import { body, validationResult } from 'express-validator';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
// import fetchUser from "../middleware/fetchUser"

const jtw_secret = process.env.jtw_secret;


router.post('/createuser',
    //validation for multiple parameters requir array 
    [body('name', 'enter a proper name').notEmpty().isLength({ min: 3 }),
    body('email', 'enter a proper email').notEmpty().isEmail(),
    body('password', 'password must contain atleast 5 letters ').notEmpty().isLength({ min: 5 })],

    async (req, res) => {
        let success = false;
        //this is for only practice to save user.
        // console.log(req.body)
        // const user = User(req.body);
        // user.save()
        //if error happens and return bad request and error
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success, errors: errors.array() });
        }

        try {
            //cheack whether the user and email exits 
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ success, errors: "user with this email already exists..." });

            }

            const salt = await bcryptjs.genSalt(10);
            let secPass = await bcryptjs.hash(req.body.password, salt);



            //this must be await because waiting for User creation
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPass,
                role: req.body.role
            });

            const data = {
                user: { id: user.id }
            }
            const authtoken = jwt.sign(data, jtw_secret);
            success = true;
            res.json({ success, authtoken });
            // console.log(user)
            // res.json(user);

        } catch (error) {
            console.error(error.message);
            res.status(500).send("some error occured...");
        }
        //this is new version of validation of req.body
        // res.send(req.body)
        // const result = validationResult(req);
        // if (result.isEmpty()) {
        //   return res.send(`Hello, ${req.query.person}!`);
        // }
        // res.send({ errors: result.array() });

    })


router.post('/login',
    //validation for multiple parameters requir array 
    body('email', 'enter a proper email').exists(),

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        //object of email and password taken from request 
        const { email, password,role } = req.body;


        try {
            let success = false;
            const user1 = await User.findOne({ email,role });
            console.log(role)
            if (!user1) {
                return res.status(500).json({ error: "enter valid credentials for login." });
            }
            // console.log(user1.permissions)
            if(user1.role ==  "admin"){
                user1.permissions.create = true;
                user1.permissions.update = true;
                user1.permissions.delete = true;

            }else if(user1.role ==  "editor"){
                user1.permissions.update = true;
                user1.permissions.delete = true;
            }

            const passwordCompare = await bcryptjs.compare(password, user1.password);
            console.log("after")

            if (!passwordCompare) {
                success = false;
                return res.status(500).json({ success, error: "enter valid credentials for login." });
            }

            const data = {
                user: { id: user1.id }
            }
            const authtoken = jwt.sign(data, jtw_secret);
            success = true;
            res.json({ success, authtoken });

        } catch (error) {
            console.error(error.message);
            res.status(500).json({ error: "enter valid credentials for login." });
        }

    })

// //getuser endpoint is use to get user details 
// //fetchUser is middleware to get token vefication. we can use it in every part where we want to acces details of user
// router.post('/getuser', fetchUser, async (req, res) => {

//     try {
//         const userId = req.user.id;
//         // console.log(userId)
//         // const user = await User.findOne(user.userId).select("-password");//.select -password is used to disselct the password

//         const user = await User.findById(userId).select("-password");
//         res.send(user)


//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ error: "enter valid credentials for login." });
//     }
// })




export default router; // Export the router
