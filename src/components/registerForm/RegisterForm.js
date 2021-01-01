import React, { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../../context/UserContext"
import './RegisterForm.css';
import Modal from "react-modal";
import {Link, useHistory} from 'react-router-dom';
import SignIn from "../signIn/SignIn";

const RegisterForm = ({modalIsOpen, closeModal}) => {
    const { userData, setUserData, signInModalIsOpen, openSignInModal } = useContext(UserContext)
    const [firstName, setFirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

   const handleSignInClick = () => {
        closeModal();
        openSignInModal()
   }

   const history = useHistory()

    const handleOnClick = async (e) => {
        e.preventDefault();
        const newUser = {
            firstName,
            lastName,
            email,
            password
        }

        const registerResponse = await axios.post("http://localhost:5000/api/auth/register", newUser)
        setUserData({ user: registerResponse.data.user, token: registerResponse.data.access_token })
        localStorage.setItem("token", registerResponse.data.access_token)
        closeModal()
        history.push("/")
    }
        // TODO: sadece token set edilecek user degil
    return (   
        <div className='registerFormContainer'>
            <SignIn openSignInModal={signInModalIsOpen}/>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <form className='registerForm'>
                    <div className="modalInputContainer">
                    <label className="input-label">First Name :</label>
                    <input  type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="modalInputContainer">
                    <label className="input-label">Last Name :</label>
                    <input type="text" name="lastName" onChange={(e) => setlastName(e.target.value)} />
                    </div>
                    <div className="modalInputContainer">
                    <label className="input-label">Email :</label>
                    <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="modalInputContainer">
                    <label className="input-label">Password :</label>
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    
                    <button onClick={handleOnClick} className="modalRegister">Register</button>
                    <p>Already have an account?<span style= {{color:"#1a8917", cursor:"pointer"}} onClick={handleSignInClick}>Sign In</span></p>
                    
                </form>
            </Modal>
        </div>
    )
};

export default RegisterForm;

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