const express = require("express");
const router = express.Router();
const Note = require("../Models/Note");
const fetchUser = require("../middleware/fetchUser");
const { body, validationResult } = require('express-validator');


//get all notes from stored data using '/api/notes/fetchAllNotes using get request 
//it's not sensative data we can use post request and login is required
router.get('/fetchAllNotes', fetchUser, async (req, res) => {

    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);

    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error...");
    }
})


//adding notes using router '/api/notes/addnotes using post  request 
//it's  sensative data we can use post request and login is required

router.post('/addnotes', fetchUser,
    //validation for multiple parameters requir array 
    [body('title', 'enter a proper title').isLength({ min: 3 }),
    body('description', 'description must contain atleast 5 letters').isLength({ min: 5 })],
    async (req, res) => {

        //destructuring the elements
        const { title, description, tag } = req.body;

        try {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = new Note({
                title, description, tag, user: req.user.id
            });
            const saveNotes = await note.save();
            res.json(saveNotes)



        } catch (error) {
            console.error(error.message);
            res.status(500).send("not added...");
        }
    })




//updating  notes using router '/api/notes/updatenote/:id using put  request 
//it's  updating of  data we can use put request and login is required for updation of perticular user

router.put('/updatenote/:id', fetchUser, async (req, res) => {

    //destructuring the elements
    const { title, description, tag } = req.body;
    try {
        const newNote = {};
        console.log(newNote);
        if (title) { newNote.title = title }
        if (description) { newNote.description = description }
        if (tag) { newNote.tag = tag }
        console.log("after" + newNote);

        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("not found"); }
        console.log(note.user);
        if (note.user.toString() !== req.user.id) { return res.status(401).send("not allowed"); }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json({ note });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error...");
    }
})

//delete  notes using router '/api/notes/deletenote/:id using delete  request 
//it's  deleteing of  data we can use delete request and login is required for deletion of perticular user

router.delete('/deletenote/:id', fetchUser, async (req, res) => {

    try {

        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("not found"); }
        console.log(note.user);
        if (note.user.toString() !== req.user.id) { return res.status(401).send("not allowed"); }

        note = await Note.findByIdAndDelete(req.params.id);
        res.json({ "success": "note has been deleted", note: note });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error...");
    }
})

module.exports = router;