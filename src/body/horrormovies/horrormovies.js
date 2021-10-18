import React from 'react';
import reactDom from 'react-dom';
import '../popularMovies/popular.css';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css'; 
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router';
import {HorrorMovieDatabase} from './horrormoivedatabase'; 
 

function HorrorMovies() {
 
  const history = useHistory();

  const ClickHandler = ()=>{
     history.push('/horror-movies');
     window.scrollTo({
      top:0
    });
  };
 
 const displayPopularMovies = () =>{
   return HorrorMovieDatabase.map((data)=> {
     return <div key={data.imdbID} className="popular_movie_item">
       <img src={data.Poster} alt={data.Title} className="popular_movie_image"></img>
       <p className="movie_rating_con"><div>{data.imdbRating}</div> <div>{data.imdbVotes}</div> </p>
     </div>
   })
  };

return(
  <div className="popular_container"> 

    <div className="popular_heading_container">
      <h2>
      Horror movies
      </h2>
       <div className="popular_seeMore" >
         See More 
         <FontAwesomeIcon icon={faArrowAltCircleRight} className="right_arrow_icon" onClick={ClickHandler}/>
       </div>
    </div>
    <div className="boxshadow_effect">

    <div className="popular_movie_container">
    {displayPopularMovies()}
    </div>
    </div>
  </div>
);
     
} ;
export default HorrorMovies;
