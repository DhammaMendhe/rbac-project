import express from "express";
const router = express.Router();
import user from "../Models/User.js";
import fetchUser from "../middleware/fetchUser.js";
import { body, validationResult } from 'express-validator';


//user jwt = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc0ZDM3MmEzZDQ5ZDI5ZjUyNzllOWU3In0sImlhdCI6MTczMzExMzY0Mn0.rQRIEJ9CkmlnJykHYpFK0TMMNY8PcaKzlyKcnNx8Wt8


router.get('/fetchAll', fetchUser, async (req, res) => {

    try {

        // const admin = await user.findOne({ _id: req.user.id, role: "admin" });
        // // console.log(admin)

        // if (!admin) {
        //     return res.status(403).send("Forbidden: You don't have admin privileges.");
        // }

        // console.log("Admin user found:", admin);


        const allusers = await user.find({ role: "user" });
        res.json(allusers);

    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error...");
    }
})


    /

    // router.post('/addnotes', fetchUser,
    //     //validation for multiple parameters requir array 
    //     [body('title', 'enter a proper title').isLength({ min: 3 }),
    //     body('description', 'description must contain atleast 5 letters').isLength({ min: 5 })],
    //     async (req, res) => {

    //         //destructuring the elements
    //         const { title, description, tag } = req.body;

    //         try {

    //             const errors = validationResult(req);
    //             if (!errors.isEmpty()) {
    //                 return res.status(400).json({ errors: errors.array() });
    //             }
    //             const user = new user({
    //                 title, description, tag, user: req.user.id
    //             });
    //             const saveNotes = await user.save();
    //             res.json(saveNotes)



    //         } catch (error) {
    //             console.error(error.message);
    //             res.status(500).send("not added...");
    //         }
    //     })




    //updating  notes using router '/api/notes/updatenote/:id using put  request 
    //it's  updating of  data we can use put request and login is required for updation of perticular user

    router.put('/updateUser/:id', fetchUser, async (req, res) => {
        // router.put('/updateUser/:id', fetchUser, async (req, res) => {

        //destructuring the elements
        const id = req.params.id;
        // console.log("this is role", id)
        const { name, email, password,role } = req.body;
        // console.log(name,email,role)

        try {
            //   const { id } = req.params; // The user's ID whose role is being updated
            //   const { role } = req.body; // The role to be assigned
         
         const userpass = await user.findById(req.params.id);
         
         console.log("this is update password",userpass);

        //  console.log("this is update password",user.password);

            const newuser = {};
            if (name) { newuser.name = name }
            if (email) { newuser.email = email }
            // if (password) { newuser.password = user.password }
            if (role) { newuser.role = role }
  
            console.log(newuser)
            const updateUser = await user.find({ _id: id, role: "user" });
            const updateUser2 = await user.find({ _id: id, role: "editor" });

            if (!updateUser && updateUser2) {
                return res.status(404).json({ error: 'User not found' });
            }
            // console.log("user found",updateUser)
            // res.json(updateUser);

            const user1 = await user.findByIdAndUpdate(req.params.id, { $set: newuser }, { new: true });
            res.json({ user1 });

            // Update the user's role in the database
            // const updatedUser = await user.findByIdAndUpdate(
            //     id,
            //     { role },
            //     { new: true }
            // );

            // if (!updatedUser) {
            //     return res.status(404).json({ error: 'User not found' });
            // }

            // res.status(200).json({ message: 'Role updated successfully', user: updatedUser });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }

    })

//delete  notes using router '/api/notes/deletenote/:id using delete  request 
//it's  deleteing of  data we can use delete request and login is required for deletion of perticular user

router.delete('/deleteuser/:id', fetchUser, async (req, res) => {

    try {
// 
        let deleteuser = await user.findById(req.params.id);
        if (!deleteuser) { return res.status(404).send("not found"); }
        console.log(deleteuser);
        // if (user.toString() !== req.user.id) { return res.status(401).send("not allowed"); }

        deleteuser = await user.findByIdAndDelete(req.params.id);
        res.json({ "success": "user has been deleted", deleteuser:deleteuser });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error...");
    }
})

export default router;