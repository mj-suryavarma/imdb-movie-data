import React,{useState, useCallback,useEffect} from 'react';
import {useHistory ,Link , BrowserRouter} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import DropdownMenu from "react-overlays/esm/DropdownMenu";
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import {  faBars ,faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import './searchresult.css';
import '../../header/header.css'
import MenuContainer from '../../menucontainer';



 /// over all search area function
function SearchMovies() {
   const [omdbResult , setOmdbResult] = useState({});
   const [searchWord, setSearchWord] = useState('');
   const history = useHistory();
  
   

   

   useEffect(() =>{
    fetchMovie();
 },[])

 

  const changeHandler = (e)  => {
     setSearchWord(e.target.value)
   
  }

  const submitHandler = (event)=> {
    event.preventDefault(); 
  
   fetchMovie();

  }
  
  const redirectHome = useCallback(() =>{
    history.push('/')
  })
 
 
  

const  fetchMovie  = () => {
 
axios.request(`http://www.omdbapi.com/?apikey=18ea989d&t=${searchWord}`).then((response) =>{
  setOmdbResult(response.data)

}).catch((error) => {
	console.error(error);
});

 

}

const errorContainer= () =>{
    
  return(
<div className="error_container">
<h3 className="error_title">Invalid search keyword ... .. .</h3>
<p className="error_info">If you want to search movies, input the correct movie name on the search bar and click the search icon. </p>
</div>
  )
} 


 

    return (
        <>
         <div className="heading-area ">
          <div className="imdb-logo " onClick={redirectHome}>MOVIE Data</div>
           <form className="form_search_control ">
           <input type="text" 
             placeholder="Search Movie here"
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
            <>
            {MenuContainer()}
            </>
      </div>
          
   <div className="search_result_container">
  { omdbResult.Response ==="False" ?  
  /// without search keyword 
   <div>

     {errorContainer()}
   </div> 
  :
  /// within search keyword
  <>    
     <div className="img_container"data-aos="fade-left">
        <h2 className="result_title">{omdbResult.Title} </h2>
        <img src={omdbResult.Poster} alt={omdbResult.Title} 
        className="result_image" data-aos="fade-left"></img> 
        <div className="img_des" data-aos="fade-left"> 
         <div style={{display:'flex',justifyContent:'space-between'}}>
        <span>{omdbResult.Year}</span>
         <span>Rated: {omdbResult.Rated}</span>  
         </div>
         <div>
           {omdbResult.Genre}
         </div>
        </div>
     </div>
     <div className="detail_container" data-aos="fade-left">
       <p><sapn className="detail_label">Director: </sapn>{omdbResult.Director}</p>
       <p><sapn className="detail_label">Release Date: </sapn>{omdbResult.Released}</p>
       <p><sapn className="detail_label">Actor: </sapn>{omdbResult.Actors}</p>
       <p><sapn className="detail_label">Writer: </sapn>{omdbResult.Writer}</p>
       <p><sapn className="detail_label">Awards: </sapn>{omdbResult.Awards}</p>
       <p><sapn className="detail_label">Box Office: </sapn>{omdbResult.BoxOffice}</p>
       <p><sapn className="detail_label">Writer: </sapn>{omdbResult.Writer}</p>
       <p>{omdbResult.Plot}</p>
    </div>
    </> }


   </div>    
        </>
    )
}

export default SearchMovies
