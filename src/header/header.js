import React, {useState, useCallback} from "react";
import {useHistory ,Link , BrowserRouter} from 'react-router-dom';
import './header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';
import { Button ,Dropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';
// import Dropdown from 'react-bootstrap'
import {  faBars ,faSearch,faArrowRight, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import Modal from 'react-bootstrap/Modal'
import MenuContainer from "../menucontainer";


function HeadingArea () {
  const [keyword , setKeyword] = useState('');
  const history = useHistory();
  

    const changeHandler = (e)  => {
      setKeyword(e.target.value);

    }

     
     const redirect = useCallback(() => {
      history.push('/find');
      

    });
    const redirectHome = useCallback(() =>{
      history.push('/')
    })
    console.log("current page is :",window.location.href)
    console.log("keyword is :",keyword)
 
    return(
        <div className="heading-area ">
            <div className="imdb-logo " onClick={redirectHome}>MOVIE Data</div>
             <form className="form_search_control ">
             <input type="text" 
               placeholder="Search for movie click here &#128073;"
                     className="search_bar" 
                     value={keyword}
                     onChange={changeHandler}
                     /> 
       <button  className="btn search_btn" type="submit" onClick={redirect}> 
                <FontAwesomeIcon icon={faArrowRight} 
                onClick={redirect}
                  className="search_btn_icon"/>
                 </button> 
                  
              </form>      
              <>
              {MenuContainer()}
              </>

        </div>
    )

}

export default HeadingArea;