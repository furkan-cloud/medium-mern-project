import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/UserContext"
import Modal from "react-modal";

const SignInForm = (props) => {
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
        <div>
            <Modal
                isOpen={props.openSignInMOdal}
                onRequestClose={props.openSignInMOdal}
                style={customStyles}
            >
                <form>
                    <label>Email</label>
                    <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                    <label>Password</label>
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleOnClick} >sign</button>
                </form>
            </Modal>
        </div >
    )
};



export default SignInForm;

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