import React, { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../../context/UserContext"
import './RegisterForm.css';
import Modal from "react-modal";

const RegisterForm = ({modalIsOpen, closeModal}) => {
    const { userData, setUserData } = useContext(UserContext)
    const [firstName, setFirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

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
    }
        // TODO: sadece token set edilecek user degil
    return (
        <div className='registerFormContainer'>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <form className='registerForm'>
                    <label>FirstName</label>
                    <input type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)} />
                    <label>LastName</label>
                    <input type="text" name="lastName" onChange={(e) => setlastName(e.target.value)} />
                    <label>Email</label>
                    <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                    <label>Password</label>
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleOnClick} >Register</button>
                </form>
            </Modal>
        </div>
    )
};

export default RegisterForm;

const customStyles = {
    content: {
        width: "60%",
        height: "auto",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};