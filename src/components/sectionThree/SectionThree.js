import React, {useContext} from 'react';
import './SectionThree.css';
import BigCardList from '../bigCardList/BigCardList'
import ReadingCard from '../readingCard/ReadingCard';
import { readingCardContent } from "../../data/readingData"
import FooterList from '../footerList/FooterList';
import UserContext from '../../context/UserContext';


const SectionThree = () => {
    const { userData, setUserData, signInModalIsOpen, openSignInModal } = useContext(UserContext)
    return (
        <div className='sectionThreeContainer'>
            <div className="bigCard-container">
                <BigCardList />
            </div>
            <div className = 'sectionThreeRightContainer'>
                <div className="sectionThree-right">
                    {userData?.user?.readingList?.slice(0,6).map((readingContent, index) =>
                        <ReadingCard
                            id={readingContent._id}
                            authorId={readingContent.author._id}
                            profileImage={readingContent?.author.avatar_img}
                            firstName={readingContent.author.firstName}
                            imageUrl={readingContent.post_image}
                            title={readingContent.title}
                            date={readingContent.formatDate}
                            key={index}
                        />)}
                </div>
                <div className='footerContainer'>
                    <FooterList />
                </div>
            </div>
        </div>
    )
}

export default SectionThree;