import React, {useContext} from 'react';
import Avatar from '../latestFromFollowing/Avatar';
import { Link } from 'react-router-dom';
import './FollowList.css';
import UserContext from '../../context/UserContext';


const FollowList = () => {
    const {userData} = useContext(UserContext)
    return (
        <div className='followListContainer'>
            <h3 className = 'followingHeader'>LATEST FROM FOLLOWING</h3>
            <div className = 'avatarContainer'>
                {
                    userData?.user?.following?.map((followed) => (
                        <Avatar
                            key={followed?._id}
                            profileImage={followed?.avatar_img}
                            firstName={followed?.firstName}
                            lastName={followed?.lastName}
                        />
                    ))
                }
            </div>
            <Link
                style = {{color: '#1a8917', textDecoration: 'none'}}
                to = '/'
            >
                All from following
            </Link>
        </div>
    )
}

export default FollowList;