import React, { useState, useContext } from "react";
import "./Header.css";
import { Link, Router, Route } from "react-router-dom";
import SignIn from "../signIn/SignIn";
import UserContext from "../../context/UserContext";
import RegisterForm from "../registerForm/RegisterForm";

function Header(props) {
  const { modalIsOpen, openModal, closeModal, signInModalIsOpen, openSignInModal } = useContext(UserContext);

  return (
    <div className="containere01">
      <RegisterForm modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <SignIn openSignInMOdal={signInModalIsOpen} closeModal={closeModal} />
      <div className="headerContainere01">
        <div className="contentLefte01">
          <img
            className="imagee01"
            src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png"
            alt="kırık"
          />
        </div>
        <div className="contentRighte01">
          <Link to="/" title="gönder">
            Our Story
          </Link>
          <Link to="/" title="gönder">
            Membership
          </Link>
          <Link to="/" title="gönder">
            Write
          </Link>
          <Link
            onClick={() => openSignInModal()}
            type="button"
            className="sigInButton"
          >
            Sign In
          </Link>
          {/* <a href="#">Our Story</a>
                <a href="#">Membership</a>
                <a href="#">Write</a>
                <a href="#">Sign In</a> */}
          <button
            onClick={() => openModal()}
            type="button"
            className="buttonFirste01"
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="footerContainere01">
        <div className="footerLefte01">
          <div className="firste01">
            <h1 className="exploree01">Explore New Perspectives</h1>
          </div>
          <div className="seconde01">
            <p>
              Read and share ideas from independent voices, world-class
              publications, and experts from around the globe. Everyone's
              welcome.{" "}
              <a href="#" style={{ textDecoration: "underline" }}>
                Learn More
              </a>
            </p>
          </div>
          <div className="thirde01">
            <button
              onClick={() => openModal()}
              type="button"
              type="button"
              className="buttone01"
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="footerRighte01"></div>
      </div>
    </div>
  );
}
export default Header;
