import { articleContent } from '../../data/articleData';
import './ArticleProfile.css';

const ArticleProfile = () => {
    return (
        <div className="articleProfileContainer">
            <a href="/profileDetails" className="articleProfileLink">
                <div>
                    <img className="articleProfileImage" src={articleContent.profileImage} />
                </div>
                <div className='articleProfileUsername'>{articleContent.username}</div>
            </a>
            <div className="articleDate">{articleContent.date}</div>
        </div>
    )
}

export default ArticleProfile;