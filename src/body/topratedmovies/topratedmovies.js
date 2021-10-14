import React, { useState } from "react";
import { TopRatedMoviesDatabase } from "./toprateddatabase";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css'; 
import { faDivide, faArrowRight,faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './topratedmovies.css';

function TopRatedMovies(){

    const useid = useState([
    "tt0111161",
    "tt0068646",
     "tt5773402", 
     "tt0468569",
       "tt0071562",
       "tt11989890",
       "tt3396910",
       "tt7391996",
        "tt0110912",
        "tt0108052",
        "tt0167260",
         "tt5275892",
    "tt0120737",
    "tt1375666",
    "tt0109830",
    "tt0137523",
    "tt7559180",
    "tt0060196",
    "tt8517640",
    "tt6019206",
    "tt5813916",
    "tt1754109",
    "tt11581174",
    "tt0167261", ]);

    axios.request('http://www.omdbapi.com/?apikey=18ea989d&i=tt1375666').then(response =>{
        console.log(response.data)
    })
    .catch(err => {
        console.log(err)
    })
    
    const displayTopRatedMovie = ()=>{
        return TopRatedMoviesDatabase.map((data)=>{
            return <div key={data.imdbID} className="topRated_movie_item">
            <img src={data.Poster} alt={data.Title} className="topRated_movie_image"></img>
            <p className="topMovie_Rating_con"><div>{data.imdbRating}</div> <div>{data.imdbVotes}</div> </p>
          </div>
        })
    }

    const ClickHandler = () =>{

    }

    return(
        <div className="topRated_container"> 
      
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