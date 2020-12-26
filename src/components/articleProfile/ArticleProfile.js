import './ArticleProfile.css';

const ArticleProfile = ({ author, formatDate }) => {
    return (
        <div className="articleProfileContainer">
            <a href="/profileDetails" className="articleProfileLink">
                <div>
                    <img className="articleProfileImage" src={author?.avatar_img} />
                </div>
                <div className='articleProfileUsername'>
                    <span>{author?.firstName}</span>
                    <span>{author?.lastName}</span>
                </div>
            </a>
            <div className="articleDate">{formatDate}</div>
        </div>
    )
}

export default ArticleProfile;