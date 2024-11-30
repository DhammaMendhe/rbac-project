import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import User from "./Components/User";
import Admin from "./Components/Admin";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Manager from "./Components/Manager";
import Register from "./Components/Register";
//build alerts for errors ,not having not empty or something..

function App() {


  
  return (
    <>
     <Router>
          <Navbar/>
          <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/manager' element={<Manager/>}/>
          <Route exact path='/user' element={<User/>}/>
          <Route exact path='/admin' element={<Admin/>}/>


            {/* <Route exact path='/home' element={<Home showalert={showalert} />} />
            <Route exact path='/about' element={<About showalert={showalert}/>}/>
            <Route exact path='/login' element={<Login showalert={showalert}/>} />
            <Route exact path='/signup' element={<Signup showalert={showalert}/>}/>
            <Route exact path='/loginUser' element={<LoginUser showalert={showalert}/>}/> */}

          </Routes>
        </Router>
     
    
    </>
  );
}

export default App;
