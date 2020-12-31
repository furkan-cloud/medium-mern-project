import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import axios from 'axios';



const MyProfile = () => {
    const {userData, setUserData} = useContext(UserContext)
    console.log(userData)
    const [firstName, setFirstName] = useState(userData.user.firstName)
    const [lastName, setlastName] = useState(userData.user.lastName)
    const [email, setEmail] = useState(userData.user.email)
    const [password, setPassword] = useState(userData.user.password)

    const handleOnClick = async (e) => {
        e.preventDefault();
        const updatedUser = {
            firstName,
            lastName,
            email,
            password
        }

        const registerResponse = await axios.put("http://localhost:5000/api/profile/update", updatedUser, 
        {
            headers: {
              "x-auth-token": userData.token,
            },
          }
          )
        setUserData({...userData, user: registerResponse.data.user})

        // localStorage.setItem("token", registerResponse.data.access_token)
    }
    return(
        <div className="profileFormContainer">
             <form className='profileForm'>
                    <div className="profileFormInputContainer">
                    <label className="profile-input-label">First Name :</label>
                    <input value={firstName} type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                    <div className="profileFormInputContainer">
                    <label className="profile-input-label">Last Name :</label>
                    <input value={lastName} type="text" name="lastName" onChange={(e) => setlastName(e.target.value)} />
                    </div>
                    <div className="profileFormInputContainer">
                    <label className="profile-input-label">Email :</label>
                    <input value={email} type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="profileFormInputContainer">
                    <label className="profile-input-label">Password :</label>
                    <input value={password} type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    
                    <button onClick={handleOnClick} className="update-btn">Update</button>
                    
                    
                </form>
        </div>
    )
}

export default MyProfile;