import React, {useState, useCallback} from "react";
import {useHistory ,Link , BrowserRouter} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';
import { Button ,Dropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';
// import Dropdown from 'react-bootstrap'
import {  faBars ,faSearch,faArrowRight, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import Modal from 'react-bootstrap/Modal';
import './header/header.css'



function MenuContainer() {
 
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const history = useHistory();
    
    const toggle = () => setDropdownOpen(prevState => !prevState);
  
    
  
      
       const handleClose = () => setIsOpen(false);
       const handleOpen = () => setIsOpen(true);
       
       
        

    return (
        <div className="menu_container" >
            <Dropdown isOpen={dropdownOpen} toggle={toggle} >
            <DropdownToggle caret className="menu_bar_icon">
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
            </DropdownMenu>
            </Dropdown>
         
          <Modal show={isOpen} onHide={handleClose} closeButton>
           <Modal.Header closeButton>
             <h2>Hello everone...,welcome !</h2>
           </Modal.Header>
           <Modal.Body>
              <h3>this is body</h3>
           </Modal.Body>
           <Modal.Footer>
             <Button className="btn" onClick={handleClose}>close</Button>
           </Modal.Footer>
          </Modal>
          <FontAwesomeIcon icon={faAddressCard} className="address_card" onClick={handleOpen} />
   </div>
    )
}

export default MenuContainer;
