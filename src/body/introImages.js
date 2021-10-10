import React from 'react';
import reactDom from 'react-dom';
import {Link , BrowserRouter} from 'react-router-dom';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css'; 
import './introImages.css'
 import noTimeToDieImage from '../imgSrc/No_time_to_die.jpg';
 import SucideSquadImage from '../imgSrc/The-Suicide-squad.jpeg';
 import TomorrowWarImage from '../imgSrc/the-tomorrow-war.jpg';
 import TenetImage from '../imgSrc/tenet.png';
 import interstellarImage from '../imgSrc/interstellar.jpg';


function IntroImages() {
   
    return (
        <div className="container mt-5">

<BrowserRouter>         
             <Link  to="/find"  className="btn search_btn"
             
             >  clickme

                 </Link>  
                 </BrowserRouter>  

  <Carousel className="carousel_container  ">
      <Carousel.Item className="carousel-item">
          <img src={noTimeToDieImage} 
           alt='avator'
           className="image"
           >
          </img>

          <Carousel.Caption className="carousel_caption">
              <h1 className='caption_heading'>No Time to die</h1>
              <h3 className="caption_des">James Bond is enjoying a tranquil life in Jamaica after leaving active service.</h3>
          </Carousel.Caption>
      </Carousel.Item>
       
      <Carousel.Item className="carousel-item">
          <img src={TenetImage} 
           alt='tenet'
           className="  image"
           >
          </img>
          
          <Carousel.Caption className="carousel_caption">
              <h2 className="caption_heading">TENET</h2>
              <h3 className="caption_des">
Tenet is a 2020 science fiction action thriller film written and directed by Christopher Nolan, who produced it with Emma Thomas.</h3>    
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item ">
          <img src={SucideSquadImage} 
           alt='the suicide squad'
           className="  image"
           >
          </img>
          <Carousel.Caption className="carousel_caption">

              <h1 className="caption_heading">The Suicide Squad </h1>
              <h3 className="caption_des">The Suicide Squad is a 2021 American superhero film based on DC Comics featuring the team Suicide Squad.</h3>
          </Carousel.Caption> 
      </Carousel.Item>
      <Carousel.Item className="carousel-item ">
          <img src={TomorrowWarImage} 
           alt='the tomorrow war'
           className="  image"
           >
          </img>
          <Carousel.Caption className="carousel_caption">
              <h2 className="caption_heading">Tomorrow War</h2>
              <h3 className="caption_des">The Tomorrow War is a 2021 American military science fiction action film directed by Chris McKay.</h3>    
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item ">
          <img src={interstellarImage} 
           alt='the tomorrow war'
           className="  image"
           >
          </img>
          <Carousel.Caption className="carousel_caption">
              <h2 className="caption_heading">Interstellar</h2>
              <h3 className="caption_des">When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.</h3>    
          </Carousel.Caption>
      </Carousel.Item>
  </Carousel>
 
       </div>
           

    )
}

export default IntroImages
