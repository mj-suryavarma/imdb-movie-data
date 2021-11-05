import React, { useState } from "react";
import { TopRatedMoviesDatabase } from "./toprateddatabase";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css'; 
import { faDivide, faArrowRight,faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './topratedmovies.css';
import { useHistory } from "react-router";


function TopRatedMovies(){

     const history = useHistory();
 
 
    const displayTopRatedMovie = ()=>{
        return TopRatedMoviesDatabase.map((data)=>{
            return <div key={data.imdbID} className="topRated_movie_item">
            <img src={data.Poster} alt={data.Title} className="topRated_movie_image"></img>
            <p className="topMovie_Rating_con"><div>{data.imdbRating}</div> <div>{data.imdbVotes}</div> </p>
          </div>
        })
    }

    const ClickHandler = () =>{
         history.push('./top-rated-movies')
         window.scrollTo({
          top:0
        })
    }

    return(
        <div className="topRated_container"  > 
      
          <div className="topRated_heading_container">
            <h2>
            Top Rated Movies 
            </h2>
             <sapn className="topRated_seeMore" >
               See More 
               <FontAwesomeIcon icon={faArrowAltCircleRight} className="right_arrow_icon" onClick={ClickHandler}/>
             </sapn>
          </div>
          <div className="topRated_movie_container">
          {displayTopRatedMovie()}
          </div>
        </div>
    )
}

export default TopRatedMovies;