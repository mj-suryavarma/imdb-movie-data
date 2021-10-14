import React from 'react';
import HomeBody from './homeBody';
import PopularPage from './popularMovies/popularpage';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import SearchMovies from './searchItem/searchMovies';

function body() {
    return (
        <BrowserRouter>
        <Switch>
        <Route exact path='/' component={HomeBody} />
        <Route exact path='/find' component={SearchMovies} />
        <Route path='/popular-movies' component={PopularPage} /> 
        </Switch>
            
    </BrowserRouter>
        
        
    )
}

export default body
