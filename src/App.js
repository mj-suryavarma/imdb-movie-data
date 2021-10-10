import React,{useState} from 'react';
import './App.css';
import Heading from './header/header';
import Body from './body/body'; 
import {BrowserRouter} from 'react-router-dom';

function App() {

  const [searchWord , setSerachWord] = useState('');


  return (

    <BrowserRouter>
    <div className="App"> 
   <Heading />

   <Body />

   {/* footer  */}
   
    </div>
 
    </BrowserRouter>
  );
}

export default App;
