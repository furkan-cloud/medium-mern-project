import axios from "axios"
import { useContext } from "react"
import { Link, useHistory } from "react-router-dom"
import UserContext from "../../context/UserContext"
import './ProfileListModal.css'

{/* <Link to={`/profileDetail/${props.authorId}`}></Link> */ }


const ProfileListModal = () => {
    const { userData, setUserData, closeModal } = useContext(UserContext)
    const history = useHistory()
    const Logout = async () => {
        const logoutRes = await axios.get(
            "http://localhost:5000/api/auth/logout",
            { headers: { "x-auth-token": userData.token } }
        );
        closeModal();
        history.push("/");
        localStorage.setItem("token", "");
        setUserData({ user: null, token: null });

    }
    return (
        <div className="profileListModalContainer">
            <Link to={`/myProfile/${userData.user._id}`}> <span>My Profile</span> </Link>
            <p onClick={Logout} >Logout</p>
        </div>
    )
}

export default ProfileListModal;