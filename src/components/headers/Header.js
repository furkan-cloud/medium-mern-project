import React from 'react';
import "./Header.css";
import {Link, Router, Route} from 'react-router-dom';
import SignUp from '../SignUp/SignUp';
function Header(props) {
    console.log(props)
    return (
        <div className = "containere01">
        <div className="headerContainere01">
            <div className="contentLefte01">
                <img className="imagee01" src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png" alt="kırık"/>
            </div>
            <div className="contentRighte01">
                <Link to= '/' title='gönder'>Our Story</Link>
                <Link to= '/' title='gönder'>Membership</Link>
                <Link to= '/' title='gönder'>Write</Link>
                <Link to= '/signup' title='gönder'>Sign Up</Link>
                {/* <a href="#">Our Story</a>
                <a href="#">Membership</a>
                <a href="#">Write</a>
                <a href="#">Sign In</a> */}
                <button type="button" className="buttonFirste01">Get Started</button>
            </div>
        </div>
        <div className="footerContainere01">
            <div className="footerLefte01">
                <div className="firste01">
                    <h1 className="exploree01">
                        Explore New Perspectives
                    </h1>
                </div>
                <div className="seconde01">
                    <p>
                    Read and share ideas from independent voices, world-class publications, and experts from around 
                    the globe. Everyone's welcome. <a href="#" style={{textDecoration: "underline"}}>Learn More</a>
                    </p>
                </div>
                <div className="thirde01">
                    <button type="button" className="buttone01">Get Started</button>
                </div>
            </div>
            <div className="footerRighte01">
            </div>
        </div>
        </div>
    )
}
export default Header