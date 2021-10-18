import React from 'react';
import HomeBody from './homeBody';
import PopularPage from './popularMovies/popularpage';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import SearchMovies from './searchItem/searchMovies';
import topratedpage from './topratedmovies/topratedpage';
import ActionPage from './actionmovies/actionpage';
import RomancePage from './romance/romancepage';



function body() {
    return (
        <BrowserRouter>
        <Switch>
        <Route exact path='/' component={HomeBody} />
        <Route exact path='/find' component={SearchMovies} />
        <Route path='/popular-movies' component={PopularPage} /> 
        <Route  path='/top-rated-movies' component={topratedpage}/>
        <Route  path='/action-movies' component={ActionPage}/>
        <Route  path='/romance-movies' component={RomancePage}/>
        </Switch>
            
    </BrowserRouter>
        
        
    )
}

export default body
