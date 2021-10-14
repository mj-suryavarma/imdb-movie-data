import React,{useState, useCallback,useEffect} from 'react';
import {useHistory ,Link , BrowserRouter} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import DropdownMenu from "react-overlays/esm/DropdownMenu";
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import {  faBars ,faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import './searchheader.css';
import './searchresult.css';



 /// over all search area function
function SearchMovies() {
   const [omdbResult , setOmdbResult] = useState({});
   const [searchWord, setSearchWord] = useState('');
   const history = useHistory();
  
   console.log("search result is ",searchWord);

   

   useEffect(() =>{
    fetchMovie();
 },[])

 

  const changeHandler = (e)  => {
     setSearchWord(e.target.value)
     console.log("value is:",e.target.value);
   
  }

  const submitHandler = (event)=> {
    event.preventDefault(); 
  
   fetchMovie();

  }
  
  const redirectHome = useCallback(() =>{
    history.push('/')
  })
 
 
  

const  fetchMovie  = () => {
 
axios.request(`http://www.omdbapi.com/?apikey=18ea989d&t=${searchWord ? searchWord : 'the dark knight'}`).then((response) =>{
  console.log("omdb checking :",response.data);
  setOmdbResult(response.data)
}).catch((error) => {
	console.error(error);
});

}




    return (
        <>
         <div className="heading-area ">
          <div className="imdb-logo " onClick={redirectHome}>IMDB Data</div>
           <form className="form_search_control ">
           <input type="text" 
             placeholder="Movie, Webseries, Actor, Actress, Drama"
                   className="search_bar" 
                   value={searchWord}
                   onChange={changeHandler}
                   /> 
     <button  className="btn search_btn" type="submit" onClick={submitHandler}> 
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
          
   <div className="search_result_container">
   <div className="img_container">
        <h2 className="result_title">{omdbResult.Title} </h2>
        <img src={omdbResult.Poster} alt={omdbResult.Title} 
        className="result_image"></img> 
        <div className="img_des"> 
         <div style={{display:'flex',justifyContent:'space-between'}}>
        <span>{omdbResult.Year}</span>
         <span>Rated: {omdbResult.Rated}</span>  
         </div>
         <div>
           {omdbResult.Genre}
         </div>
        </div>
     </div>
     <div className="detail_container">
       <p><sapn className="detail_label">Director: </sapn>{omdbResult.Director}</p>
       <p><sapn className="detail_label">Release Date: </sapn>{omdbResult.Released}</p>
       <p><sapn className="detail_label">Actor: </sapn>{omdbResult.Actors}</p>
       <p><sapn className="detail_label">Writer: </sapn>{omdbResult.Writer}</p>
       <p><sapn className="detail_label">Awards: </sapn>{omdbResult.Awards}</p>
       <p><sapn className="detail_label">Box Office: </sapn>{omdbResult.BoxOffice}</p>
       <p><sapn className="detail_label">Writer: </sapn>{omdbResult.Writer}</p>
       <p>{omdbResult.Plot}</p>
    </div>


   </div>    
        </>
    )
}

export default SearchMovies
