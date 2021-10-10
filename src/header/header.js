import React, {useState, useCallback} from "react";
import ReactDom from 'react-dom';
import {useHistory ,Link , BrowserRouter} from 'react-router-dom';
import './header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import DropdownMenu from "react-overlays/esm/DropdownMenu";
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import {  faBars ,faSearch } from "@fortawesome/free-solid-svg-icons";
import {searchKeyword} from '../Action/index';
import {  useDispatch } from "react-redux";




function HeadingArea () {
  const [keyword , setKeyword] = useState('indian');
  const dispatch = useDispatch();
  const history = useHistory();


    const changeHandler = (e)  => {
      setKeyword(e.target.value);

    }
    const submitHandler = (e)=> {
       e.preventDefault();
        dispatch(searchKeyword(keyword));
        console.log("dispatch is ",dispatch);
    }
    const redirect = useCallback(() => {
      history.push('/find')

    })
    const redirectHome = useCallback(() =>{
      history.push('/')
    })
    console.log("current page is :",window.location.href)
    
 
    return(
        <div className="heading-area ">
            <div className="imdb-logo ">IMDB Data</div>
             <form className="form_search_control ">
             <input type="text" 
               placeholder="Movie, Webseries, Actor, Actress, Drama"
                     className="search_bar" 
                     value={keyword}
                     onChange={changeHandler}
                     /> 
       <button  className="btn search_btn" type="submit" onClick={()=> {
         
         redirect();  
         submitHandler(); 
         
         }}> 
                <FontAwesomeIcon icon={faSearch} 
                // onClick={submitHandler}
                  className="search_btn_icon"/>
                 </button> 
                  
              </form>      
              <div className="menu_container" >
              <FontAwesomeIcon icon={faBars} className="menu_bar_icon" />
           <Button className="btn btn-primary btn-sm m-2 menu_btn ">menu</Button>    
             </div>  
 

        </div>
    )

}

export default HeadingArea;