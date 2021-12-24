import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from '../login';
import Home from '../Home';
import Register from '../register';
import { Provider } from 'react-redux';
import Main from '../main';
import { store } from '../../../config/redux';
import Invoice from '../Invoice';
import Profile from '../Profile';
import Tutor from '../Tutor';



function App() {
  return (
    <Provider store={store} >

    
    <Router>
    

    
        <Routes>
      <Route path="/login"  element={<Login />}/>
      <Route path="/profile"  element={<Profile />}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/invoice" element={<Invoice/>} />
      <Route path="/tutor" element={<Tutor/>}/>
      <Route path="/" element={<Main />}/>
     
     
        
      
    </Routes>
      
  
 
    </Router>
</Provider>
  );
}

export default App;
