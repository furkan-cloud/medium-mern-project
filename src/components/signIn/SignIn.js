import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/UserContext"
import Modal from "react-modal";
import "./SignIn.css"

const SignInForm = ({openSignInMOdal, closeModal}) => {
    const { setUserData } = useContext(UserContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleOnClick = async (e) => {
        e.preventDefault()
        const newUser = {
            email,
            password
        }

        const signResponse = await axios.post("http://localhost:5000/api/auth/login", newUser)
        setUserData({ user: signResponse.data.user, token: signResponse.data.access_token })
        localStorage.setItem("token", signResponse.data.access_token)
    }

    return (
        <div className="mainContainer">
            <Modal
                isOpen={openSignInMOdal}
                //isOpen={this.state.showModal}
                // onRequestClose={closeModal}
                onRequestClose = {closeModal}
                shouldCloseOnOverlayClick={true}
                style={customStyles}
            >
            <form className="signInForm" >
                <div className="signInContainer">
                    <label>Email :</label>
                    <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} className="signInInput" />
                </div>
                <div className="signInContainer">
                    <label>Password :</label>
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} className="signInInput" />
                </div>
                <button onClick={handleOnClick} className="modalSignIn">Sign In</button>
                <button onClick={closeModal}>close</button>
            </form>
            </Modal>
        </div >
    )
};



export default SignInForm;

const customStyles = {
    content: {
        width: "50%",
        height: "auto",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};