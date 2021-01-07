import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SignIn from "../signIn/SignIn";
import UserContext from "../../context/UserContext";
import RegisterForm from "../registerForm/RegisterForm";

function Header(props) {
  const {
    modalIsOpen,
    openModal,
    closeModal,
    signInModalIsOpen,
    openSignInModal,
  } = useContext(UserContext);

  return (
    <div className="containere01">
      <RegisterForm modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <SignIn
        openSignInModal={openSignInModal}
        signInModalIsOpen={signInModalIsOpen}
      />
      <div className="headerContainere01">
        <div className="contentLefte01">
          <img
            className="imagee01"
            src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png"
            alt=""
          />
        </div>
        <div className="contentRighte01">
          <div className="contentRighte011">
            <Link id="link1" to="/" title="gönder">
              Our Story
            </Link>
            <Link id="link2" to="/" title="gönder">
              Membership
            </Link>
            <Link id="link3" to="/" title="gönder">
              Write
            </Link>
          </div>
          <div className="contentRighte012">
            <Link
              id="link4"
              onClick={() => openSignInModal()}
              type="button"
              className="sigInButton"
            >
              Sign In
            </Link>
            <button onClick={() => openModal()} className="buttonFirste01">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="footerContainere01">
        <div className="footerLefte01">
          <div className="firste01">
            <h1 className="exploree01">Explore new perspectives</h1>
          </div>
          <div className="seconde01">
            <p>
              Read and share ideas from independent voices, world-class
              publications, and experts from around the globe. Everyone's
              welcome.{" "}
              <a href="/" style={{ textDecoration: "underline" }}>
                Learn More
              </a>
            </p>
          </div>
          <div className="thirde01">
            <button onClick={() => openModal()} className="buttone01">
              Get Started
            </button>
          </div>
        </div>
        <div className="footerRighte01">
          <img
            className="footerRighte01img"
            src="https://miro.medium.com/proxy/1*8rgW0Qvy2bSGSBMlORMhQA.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Header;
