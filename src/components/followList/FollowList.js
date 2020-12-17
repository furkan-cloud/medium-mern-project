import React from 'react';
import Avatar from '../latestFromFollowing/Avatar';
import { Link } from 'react-router-dom';
import './FollowList.css';

const followList = [
    {
        id: 1,
        profileImage: 'https://miro.medium.com/fit/c/64/64/1*VmzNTB8YakkIGe0XM6BXqg@2x.jpeg',
        firstName: 'Habib',
        lastName: 'Koc'
    },
    {
        id: 2,
        profileImage: 'https://miro.medium.com/fit/c/64/64/1*vsBpj7hFPwZf-16Yt09iLw.jpeg',
        firstName: 'Murat',
        lastName: 'Turk'
    },
    {
        id: 3,
        profileImage: 'https://miro.medium.com/fit/c/64/64/0*K3uWM5okU2grFlZ1.jpg',
        firstName: 'Faruk',
        lastName: 'Cihan'
    },
    {
        id: 4,
        profileImage: 'https://miro.medium.com/fit/c/64/64/1*VmzNTB8YakkIGe0XM6BXqg@2x.jpeg',
        firstName: 'Aysel',
        lastName: 'Koc'
    },
    {
        id: 5,
        profileImage: 'https://miro.medium.com/fit/c/64/64/1*vsBpj7hFPwZf-16Yt09iLw.jpeg',
        firstName: 'Emin',
        lastName: 'Turk'
    },
    {
        id: 6,
        profileImage: 'https://miro.medium.com/fit/c/64/64/0*K3uWM5okU2grFlZ1.jpg',
        firstName: 'Hasan',
        lastName: 'Cihan'
    },
    {
        id: 7,
        profileImage: 'https://miro.medium.com/fit/c/64/64/0*K3uWM5okU2grFlZ1.jpg',
        firstName: 'Serkan',
        lastName: 'Cihan'
    },
    {
        id: 6,
        profileImage: 'https://miro.medium.com/fit/c/64/64/0*K3uWM5okU2grFlZ1.jpg',
        firstName: 'Yavuz',
        lastName: 'Cihan'
    },

]

const FollowList = () => {
    return (
        <div className='followListContainer'>
            <h3 className = 'followingHeader'>LATEST FROM FOLLOWING</h3>
            <div className = 'avatarContainer'>
                {
                    followList.map((followed) => (
                        <Avatar
                            key={followed.id}
                            profileImage={followed.profileImage}
                            firstName={followed.firstName}
                            lastName={followed.lastName}
                        />
                    ))
                }
            </div>
            <Link
                style = {{color: '#1a8917', textDecoration: 'none'}}
                to = '/'
                onClick = {() => {}}
            >
                All from following
            </Link>
        </div>
    )
}

export default FollowList;