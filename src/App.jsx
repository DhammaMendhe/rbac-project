import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./Components/User";
import Admin from "./Components/Admin";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Editor from "./Components/Editor";
import Register from "./Components/Register";
import Login from "./Components/loginsignup/Login";
import Signup from "./Components/loginsignup/Signup";
import Footer from "./Components/Footer";
import UserStates from './Context/UserState'
//build alerts for errors ,not having not empty or something..

function App() {
  return (
    <>
    
    <UserStates>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/register" element={<Register />} /> */}
          <Route exact path="/Editor" element={<Editor />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />

          {/* <Route exact path='/home' element={<Home showalert={showalert} />} /> */}
        </Routes>
      </Router>

      </UserStates>
      {/* <Footer/> */}
    </>
  );
}

export default App;
