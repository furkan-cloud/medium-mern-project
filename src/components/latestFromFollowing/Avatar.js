import React from 'react';
import './Avatar.css';

const Avatar = ({firstName, lastName, profileImage, ...props}) => {
    return (
        <div className = 'avatarContainer'>
            <div>
                <img className = 'avatarImage' src={profileImage} />
                <p>{firstName + ' ' + lastName}</p>
            </div>
        </div>
    )
}

export default Avatar;