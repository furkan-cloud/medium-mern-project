import './ArticleProfile.css';

const ArticleProfile = ({ author }) => {
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
            <div className="articleDate">{author?.createdAt}</div>
        </div>
    )
}

export default ArticleProfile;