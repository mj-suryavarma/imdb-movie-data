import React from 'react';
import HeadingArea from '../../header/header';
import { popularMovieDataBase } from './popularDatabase';
import 'bootstrap/dist/css/bootstrap.css'; 
import { faStar  } from '@fortawesome/free-solid-svg-icons';
import './popularpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function popularpage() {
    
    const displayAllPopularMovies = () =>{
        return popularMovieDataBase.map((data)=>{
            return <div className="pp_items" data-aos="fade-left">
                <div className="pp_img_container">
                <h3 className="pp_title">{data.Title}({data.Year})</h3>
                <img src={data.Poster} alt={data.Title} className="pp_img" />
                </div>
                <div className="pp_detail_container">
               
                   <div><span className="pp_declare">Director: </span>{data.Director}</div>
                   <div><span className="pp_declare">Actors: </span>{data.Actors}</div>
                   <div><span className="pp_declare">Released: </span>{data.Released}</div>
                   <div >{data.Plot}</div>
                   <div className="pp_rating_container">
                   <div><span className="pp_declare_rating">Imdb: <FontAwesomeIcon icon={faStar} className="pp_rating_star"/> </span>{data.imdbRating}</div>
                   <div><span className="pp_declare_rating">Votes: </span>{data.imdbVotes}</div>
                   </div>

                </div>
            </div>
        })
    }

    return (
        <div>
            <HeadingArea />
            <div className="pp_full_container ">
            <h1 className="pp_page_title ">Top 10 Popular Movies From IMDB</h1>
            <div className="pp_all_container container">
                {displayAllPopularMovies()}
            </div>
            </div>
        </div>
    )
}

export default popularpage
