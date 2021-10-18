import React,{useState} from 'react';
import IntroImages from './introImages'; 
import HeadingArea from '../header/header';
import Popular from './popularMovies/popular';
import TopRatedMovies from './topratedmovies/topratedmovies';
import ActionMovie from './actionmovies/actionmovie';
import RomanceMovie from './romance/romancemovie';
import './homebody.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import HorrorMovies from './horrormovies/horrormovies';
import DramaMovies from './dramamovies/dramamovies';


function HomeBody() {

  const [isOpen, setIsOpen ] = useState(false);

  

    return (
      <>
 <HeadingArea />    
 <div className="home_page_body">
<IntroImages />
<TopRatedMovies />
<ActionMovie/>
{/* load more using bootstrap collapse */}
<div className="collapse_button text-center"> 
<Button 
onClick={()=>setIsOpen(!isOpen)}
aria-expanded={isOpen}
aria-controls="collapseID" 
className=" text-center"
style={{
  visibility: isOpen ? "hidden" : "visible"
  
   }}
>
  Load More
  </Button>
</div>
  <Collapse in={isOpen}>
    <div id="collapseID">
      
<DramaMovies />
<Popular />
<RomanceMovie />
<HorrorMovies />
    </div>
  </Collapse>
   </div> 
      </>
    )
}

export default HomeBody;
