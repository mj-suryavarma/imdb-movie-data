import React from 'react';
import IntroImages from './introImages'; 
import HeadingArea from '../header/header';
import Popular from './popularMovies/popular';
import TopRatedMovies from './topratedmovies/topratedmovies';

function homeBody() {
    return (
      <>
 <HeadingArea />     
<IntroImages />
<TopRatedMovies />
<Popular />
      </>
    )
}

export default homeBody
