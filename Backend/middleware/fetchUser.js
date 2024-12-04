import { header } from 'express-validator';
import user from "../Models/User.js";
import jwt from 'jsonwebtoken';
const jtw_secret = "iamhappywith$this";

//admin authtoken sahil : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc0ZDNmNDI5MTg2OGQzZjBkMjhlOWVkIn0sImlhdCI6MTczMzExNTcxNH0.1zKTO1QJ4IZuGLOeLNhzNF5qanHjhmqPDCsPoNpTKrU



//editor authtoken : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc0ZDU3Nzg4MDE0YTJhNGNmNGFjZDdkIn0sImlhdCI6MTczMzEyMTkxMn0.s7g8qNEerZT4z-4_Hdlr-qc1PMcOWqkXzcDN2vYXWH4


const fetchUser = async (req, res, next) => {
    const token = req.header('auth-token');
    // console.log(token)
    if (!token) {
        return res.status(401).send("Access Denied: No token provided");
    }

    try {
        const data = jwt.verify(token, jtw_secret);
        req.user = data.user;
        // console.log(req.user)

        const admin = await user.findOne({ _id: req.user.id, role: "admin" });
        const editor = await user.findOne({ _id: req.user.id, role: "editor" });

        // console.log(editor)

        if (!admin && !editor) {
            return res.status(403).send("Forbidden: You don't have admin privileges.");
        }
      
        next();
    } catch (error) {
        res.status(401).send("please authenticate using proper token");
    }

}
export default fetchUser; 