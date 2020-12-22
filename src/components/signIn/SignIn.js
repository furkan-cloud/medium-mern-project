import React, {useState, useContext} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/UserContext"

const SignInForm = () => {
    const {userData, setUserData} = useContext(UserContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()
 
    const handleOnClick = async(e) =>{
        e.preventDefault()
        const newUser = {  
            email,
            password
        }

        const signResponse = await axios.post("http://localhost:5000/api/auth/login", newUser)
        setUserData({user: signResponse.data.user, token: signResponse.data.access_token})
        localStorage.setItem("token", signResponse.data.access_token)
        history.push("/home")
    }

    return(
        <div>
            <form>
                <label>Email</label>
                <input type = "email" name = "email" onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input type = "password" name = "password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick ={handleOnClick} >sign</button>
            </form>
        </div>
    )
};

export default SignInForm;