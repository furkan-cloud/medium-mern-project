import React from 'react';
import ReactDOM from 'react-dom'
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBookmark,faUserCircle, faBell } from '@fortawesome/free-solid-svg-icons';
// import { checkSquare } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
    return(
        <div className="container">
            <div className="containerLeft">
                <img className="navbarImage" src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png"/>
                <h1 className="headerLeft">Good Afternoon</h1>
            </div>
            
            <div className="containerRight">
                {/* <h1>Good Afternoon</h1> */}
                {/* <FontAwesomeIcon icon={fa-search} /> */}
                {/* <i style={{fontSize:15}} className="fas fa-search"></i> */}
                <div className="search"><FontAwesomeIcon icon={faSearch} size="2x" /></div>
                <div className="search"><FontAwesomeIcon icon={faBookmark} size="2x"/></div>
                <div className="search"><FontAwesomeIcon icon={faBell} size="2x"/></div>
                <button className="button">Upgrade</button>
                <div className="search"><FontAwesomeIcon icon={faUserCircle} size="2x"/></div>
             
                {/* <i class="far fa-bookmark"></i> */}
            </div>
        </div>
        
    )
}

export default Navbar;
