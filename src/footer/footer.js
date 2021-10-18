import React from "react";
import { faLink, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGithubSquare, faLinkedin, faStackOverflow,  faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import './footer.css';
import mj from './mj.jfif'

function Footer() {

    return(
        <div className="bg-dark  footer_container text-white">
            <div className="self_declare_container">
                Hi I'm MJ Suryavarma 
                <img src={mj} alt="mj_suryavarma" className="my_photo"/>
                </div>

            <div className="contact_container">
            <div className="email_container">
                   <p className="contact_me">Contact Me:</p>
                   <p className="email">mjsuryavarma@gmail.com</p>
                   <p className="email">jithendrasuryavarma@gmail.com</p>
                  
               </div>
               <div className="social_media_container">
                   <p className="connect_me">connect with me</p>
                   <div className="social_media">
                       <a href="https://www.linkedin.com/in/m-jithendra-suryavarma-9b245020a/" target="_blank" rel="noreferrer">
                 <FontAwesomeIcon icon={faLinkedin} className="footer_sm_icon" />
                       </a>
                       <a href="https://github.com/mj-suryavarma" target="_blank" rel="noreferrer">
                 <FontAwesomeIcon icon={faGithubSquare} className="footer_sm_icon" />
                       </a>
                       <a href="https://stackoverflow.com/users/16942358/suryavarma-mj" target="_blank" rel="noreferrer">
                 <FontAwesomeIcon icon={faStackOverflow} className="footer_sm_icon" />
                       </a>
                       <a href="https://twitter.com/mj_suryavarma"  target="_blank" rel="noreferrer">
                 <FontAwesomeIcon icon={faTwitterSquare}  className="footer_sm_icon "/>
                       </a>
                   </div>
               </div>
            </div>

        </div>
    )
}

export default Footer;