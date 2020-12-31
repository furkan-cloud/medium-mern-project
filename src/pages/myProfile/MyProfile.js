import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import Modal from "react-modal";
import axios from 'axios';
import Card from '../../components/card/Card'
import './MyProfile.css'
import MyProfileUpdateForm from "../../components/myProfileUpdateform/MyProfile";

const MyProfile = () => {

    const { userData } = useContext(UserContext);
    const [showProfileModal, setShowProfileModal] = useState(false);

    const handleOnUpdateClose = () => {
        setShowProfileModal(false);
    }
    const handleOnUpdateOpen = () => {
        setShowProfileModal(true);
    }

    // localStorage.setItem("token", registerResponse.data.access_token)

    return (
        <div className="profileContainer">
            <Modal
                isOpen={showProfileModal}
                onRequestClose={handleOnUpdateClose}
                style={customStyles}
            >
                <MyProfileUpdateForm handleOnUpdateClose = {handleOnUpdateClose} setShowProfileModal = {setShowProfileModal} />
            </Modal>
            <div className='myProfileHeader'>
                <div className='myProfileHeaderAvatarContainer' >
                    <img className='myProfileAvatar' src={userData?.user?.avatar_img}></img>
                    <button>Edit Image</button>
                </div>
                <div className='myProfileHeaderFollowContainer'>
                    <div>
                        <span>{userData?.user?.firstName + ' ' + userData?.user?.lastName}</span>
                    </div>
                    <div>
                        <div>Followers: {userData?.user?.followersCount}</div>
                        <div>Following: {userData?.user?.followingCount}</div>
                    </div>
                    <div>
                        <button onClick={handleOnUpdateOpen}>Edit Profile</button>
                    </div>
                </div>
            </div>
            <div className='myProfileContent'>
                <div className='myProfileContentLeft'>
                    <h3>Reading List</h3>
                    {
                        userData?.user?.readingList?.map((readingCard, index) =>
                            <Card
                                id={readingCard?._id}
                                authorId={readingCard?.author?._id}
                                username={readingCard?.author?.firstName + readingCard?.author?.lastName}
                                title={readingCard?.title}
                                profileImage={readingCard?.author?.avatar_img}
                                date={readingCard?.formatDate}
                                imageUrl={readingCard?.post_image}
                                key={index}
                            />
                        )
                    }
                </div>
                <div className='myProfileContentRight'>
                    <h3>Articles</h3>
                    {
                        userData?.user?.posts?.map((post, index) =>
                            <Card
                                id={post?._id}
                                authorId={post?.author?._id}
                                username={post?.author?.firstName + post?.author?.lastName}
                                title={post?.title}
                                profileImage={post?.author?.avatar_img}
                                date={post?.formatDate}
                                imageUrl={post?.post_image}
                                key={index}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default MyProfile;

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