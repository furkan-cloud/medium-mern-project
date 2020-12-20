import { articleContent } from '../../data/articleData';
import ArticleProfile from '../../components/articleProfile/ArticleProfile';
import './DetailSectionMiddle.css';

const DetailSectionMiddle = () => {
    return(
            <div className = 'articleDetailMiddle'>
                <h1 className = 'articleTitle'>{articleContent?.title}</h1>
                <ArticleProfile />
                <img className = 'articleMainImage' src={articleContent?.imageUrl} />
                <p>{articleContent?.articleText}</p>
            </div>
    )
}

export default DetailSectionMiddle;