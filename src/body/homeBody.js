import React,{useState,useEffect} from 'react';
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
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Spinner } from 'reactstrap';
 


function HomeBody() {

  const [isOpen, setIsOpen ] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

   useEffect(() =>{
     Aos.init({duration : 2000})
      setIsLoading(!isOpen)
    
    },[]);
    
    const launchLoading = () => {
      setIsLoading(false)
     setTimeout(() => {
        setIsLoading(true);
     }, 2000);

   }

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
onClick={()=>{setIsOpen(!isOpen); launchLoading();}}
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
<div style={{textAlign:'center',display: isLoading ? "none" : "", }} >

    <Spinner type="border" color="blue" ></Spinner>
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
