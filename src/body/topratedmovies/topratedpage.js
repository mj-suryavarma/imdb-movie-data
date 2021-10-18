import React from 'react';
import HeadingArea from '../../header/header';
import {TopRatedMoviesDatabase} from './toprateddatabase';
import 'bootstrap/dist/css/bootstrap.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar  } from '@fortawesome/free-solid-svg-icons';
import './topratedpage.css';


function topratedpage() {

    const displayAllPopularMovies = () =>{
        return TopRatedMoviesDatabase.map((data)=>{
            return <div className="tp_items">
                <div className="tp_img_container">
                <h3 className="tp_title">{data.Title}({data.Year})</h3>
                <img src={data.Poster} alt={data.Title} className="tp_img" />
                </div>
                <div className="tp_detail_container">
               
                   <div><span className="tp_declare">Director: </span>{data.Director}</div>
                   <div><span className="tp_declare">Actors: </span>{data.Actors}</div>
                   <div><span className="tp_declare">Released: </span>{data.Released}</div>
                   <div >{data.Plot}</div>
                   <div className="tp_rating_container">
                   <div><span className="tp_declare_rating">Imdb: <FontAwesomeIcon icon={faStar} className="tp_rating_star"/> </span>{data.imdbRating}</div>
                   <div><span className="tp_declare_rating">Votes: </span>{data.imdbVotes}</div>
                   </div>

                </div>
            </div>
        })
    }

    return (
        <div>
            <HeadingArea />
            <div className="tp_full_container ">
            <h1 className="tp_page_title ">Top Rated Movies From IMDB</h1>
            <div className="tp_all_container container">
                {displayAllPopularMovies()}
            </div>
            </div>
        </div>
    )
}

export default topratedpage
