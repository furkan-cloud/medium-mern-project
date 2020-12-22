import React, {useState, useContext} from "react";
import axios from "axios";
import UserContext from "../../context/UserContext"

const SignInForm = () => {
    const {userData, setUserData} = useContext(UserContext)
    const [firstName, setFirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
 
    const handleOnClick = async(e) =>{
        e.preventDefault()
        const newUser = {
            firstName,
            lastName,
            email,
            password
        }

        const signResponse = await axios.post("http://localhost:5000/api/auth/sign", newUser)
        setUserData({user: signResponse.data.user, token: signResponse.data.access_token})
    }

    return(
        <div>
            <form>
                <label>FirstName</label>
                <input type = "text" name = "firstName" onChange = {(e) => setFirstName(e.target.value)} />
                <label>LastName</label>
                <input type = "text" name = "lastName" onChange={(e) => setlastName(e.target.value)} />
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