import React from 'react';
import HeadingArea from '../../header/header';
import { popularMovieDataBase } from './popularDatabase';

function popularpage() {
    
    const displayAllPopularMovies = () =>{
        return popularMovieDataBase.map((data)=>{
            return <div>
                <h3>{data.Title}</h3>
                <img src={data.Poster}></img>
            </div>
        })
    }

    return (
        <div>
            <HeadingArea />
            <h1>popular movies page</h1>
            <div>
                {displayAllPopularMovies()}
            </div>
        </div>
    )
}

export default popularpage
