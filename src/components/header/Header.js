import React from 'react';
import "./header.css";
import {Link, Router, Route} from 'react-router-dom';
import SignUp from '../SignUp/SignUp';

function Header(props) {
    console.log(props)
   
    return (
        <div className = "container">

        <div className="headerContainer">
            

            <div className="contentLeft">
                <img className="image" src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png" alt="kırık"/>
            </div>

            <div className="contentRight">
               

                <Link to= '/' title='gönder'>Our Story</Link>
                <Link to= '/' title='gönder'>Membership</Link>
                <Link to= '/' title='gönder'>Write</Link>
                <Link to= '/signup' title='gönder'>Sign Up</Link>


                

               
                {/* <a href="#">Our Story</a>
                <a href="#">Membership</a>
                <a href="#">Write</a>
                <a href="#">Sign In</a> */}
                <button type="button" className="buttonFirst">Get Started</button>
            </div>

        </div>
        <div className="footerContainer">
            <div className="footerLeft">
                <div className="first">
                    <h1 className="explore">
                        Explore New Perspectives
                    </h1>
                </div>

                <div className="second">
                    <p>
                    Read and share ideas from independent voices, world-class publications, and experts from around 
                    the globe. Everyone's welcome. <a href="#" style={{textDecoration: "underline"}}>Learn More</a>

                    </p>
                </div>

                <div className="third">
                    <button type="button" className="button">Get Started</button>
                </div>


            </div>

            <div className="footerRight">

            </div>



        </div>



        </div>
        
        

    )
}

export default Header
