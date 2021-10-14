import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import Body from './body/body'; 
import {BrowserRouter} from 'react-router-dom';
import Footer from './footer/footer';
function App() {



  return (

    <BrowserRouter>
    <div className="App"> 
   <Body />
  {/* <Footer /> */}
    </div> 
    </BrowserRouter>
  );
}

export default App;
