import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './JsFIles/Navbar';
import Homepage from './JsFIles/Homepage';
import Games from './JsFIles/Games';
import Pubgrooms from './JsFIles/Pubgrooms';
import Contact from './JsFIles/Contact';
import Signup from './Signup';
import Signin from './JsFIles/Signin';
import "./Css/Pubgrooms.css";
import "./Css/Navbar.css";
import "./Css/Games.css";
import "./Css/Contact.css";
import "./Css/Homepage.css";
import "./Css/Signup.css";
import "./Css/Signin.css";
function App(){
  return(<>
  <Navbar />
  <Homepage />
  {/* <Games /> */}
 {/*  <Pubgrooms /> */}
  {/*   <Contact /> */}
 {/* <Signup /> */}
   {/*   <Signin /> */}
  </>);
}


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);