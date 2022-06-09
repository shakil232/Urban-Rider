import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Destination from "./Pages/Destination/Destination";
import NotFount from "./Pages/NotFount/NotFount";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
// import AuthProvider from "./Context/AuthProvider";
// import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";


function App() {


  return (
      <Router>
        <Routes>
          {/* normal-route  */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/destination" element={<Destination />} />
          {/*  404 */}
          <Route path="*" element={<NotFount />} />
        </Routes>
      </Router>
 

    // <AuthProvider>
    //   <Router>
    //     <Routes>
    //       {/* normal-route  */}
    //       <Route path="/home" element={<Home />} />
    //       <Route path="/contact" element={<Contact />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/login" element={<Login />} />
    //       {/* PrivateRoute */}
    //       <Route element={<PrivateRoute />} >
    //         <Route path="/destination" element={<Destination />} />
    //       </Route>
    //       {/* exact and 404 */}
    //       <Route path="/" element={<Home />} />
    //       <Route path="*" element={<NotFount />} />
    //     </Routes>
    //   </Router>
    // </AuthProvider>
  );
}


export default App;
