import React, {useState, useCallback} from "react";
import {useHistory ,Link , BrowserRouter} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';
import { Button ,Dropdown,DropdownToggle,DropdownMenu,DropdownItem, Tooltip } from 'reactstrap';
// import Dropdown from 'react-bootstrap'
import {  faBars ,faSearch,faArrowRight, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGithubSquare, faLinkedin, faStackOverflow,  faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import Modal from 'react-bootstrap/Modal';
import './header/header.css';
import './menucontainer.css';




function MenuContainer() {
 
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const history = useHistory();
    const [openTooltip2, setOpenTooltip2] = useState(false);
    const [openTooltip1, setOpenTooltip1] = useState(false);
    
    const toggle = () => setDropdownOpen(prevState => !prevState);
  
    
  
      
       const handleClose = () => setIsOpen(false);
       const handleOpen = () => setIsOpen(true);
       
       
        

    return (
        <div className="menu_container" >
          <Tooltip target="menuIcon" isOpen={openTooltip1} toggle={()=> setOpenTooltip1(!openTooltip1)}>
            menu
          </Tooltip>
            <Dropdown isOpen={dropdownOpen} toggle={toggle} >
            <DropdownToggle caret className="menu_bar_icon" id="menuIcon">
              menu
             </DropdownToggle>
            <DropdownMenu right >
              <DropdownItem text style={{fontSize:'1.2rem',fontWeight : '700'}}>
                Movies Genre List
                </DropdownItem>
              <DropdownItem  style={{ fontWeight : '500'}}
               onClick={ () =>history.push('/top-rated-movies')}>
                Top Rated Movies
              </DropdownItem>
              <DropdownItem style={{ fontWeight : '500'}}
               onClick={() => history.push('/popular-movies')}>
                Popular Movies
              </DropdownItem>
              <DropdownItem  style={{ fontWeight : '500'}}
              onClick={() => history.push('/action-movies')}>
                Action Movies
              </DropdownItem>
              <DropdownItem  style={{ fontWeight : '500'}}
              onClick={() => history.push('/romance-movies')}>
                Romance Movies
              </DropdownItem>
              <DropdownItem  style={{ fontWeight : '500'}}
              onClick={() => history.push('/drama-movies')}>
                 Best Drama Movies
              </DropdownItem>
              <DropdownItem  style={{ fontWeight : '500'}}
              onClick={() => history.push('/horror-movies')}>
                 Horror Movies
              </DropdownItem>
            </DropdownMenu>
            </Dropdown>

          <Modal show={isOpen} onHide={handleClose} closeButton >
           <Modal.Header closeButton >
             <h2> Welcome My Friend!..</h2>
           </Modal.Header>

           <Modal.Body className="modal_body"> 
           <p>
            Hi! I'm MJS. I'm a creative Front-end developer and a freelancer. If you like to work with me please contact me.

           </p>
           <p>
             email : 
           <div>
           mjsuryavarma@gmail.com
             </div>
             <div>
               jithendrasuryavarma@gmail.com
             </div>
           </p>
           <h4>Social Media: </h4>
             <div className="modal_social_media">
                       <a href="https://www.linkedin.com/in/m-jithendra-suryavarma-9b245020a/" target="_blank" rel="noreferrer">
                 <FontAwesomeIcon icon={faLinkedin} className="modal_sm_icon" />
                       </a>
                       <a href="https://github.com/mj-suryavarma" target="_blank" rel="noreferrer">
                 <FontAwesomeIcon icon={faGithubSquare} className="modal_sm_icon" />
                       </a>
                       <a href="https://stackoverflow.com/users/16942358/suryavarma-mj" target="_blank" rel="noreferrer">
                 <FontAwesomeIcon icon={faStackOverflow} className="modal_sm_icon" />
                       </a>
                       <a href="https://twitter.com/mj_suryavarma"  target="_blank" rel="noreferrer">
                 <FontAwesomeIcon icon={faTwitterSquare}  className="modal_sm_icon "/>
                       </a>

             </div>
           </Modal.Body>
           <Modal.Footer>
             <Button className="btn" onClick={handleClose}>close</Button>
           </Modal.Footer>
          </Modal>

          {/* contact card using modal */}
          <FontAwesomeIcon icon={faAddressCard} className="address_card" id="contactCardIcon" onClick={handleOpen} />
          <Tooltip isOpen={openTooltip2} target="contactCardIcon" toggle={() => setOpenTooltip2(!openTooltip2)}>
            contact
            </Tooltip>      
   </div>
    )
}

export default MenuContainer;
