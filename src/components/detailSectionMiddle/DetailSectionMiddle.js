import ArticleProfile from '../../components/articleProfile/ArticleProfile';
import './DetailSectionMiddle.css';

const DetailSectionMiddle = ({singleArticle}) => {


    return (
        <div className='articleDetailMiddle'>
            <h1 className='articleTitle'>{singleArticle?.title}</h1>
            <ArticleProfile author = {singleArticle?.author} />
            <img className='articleMainImage' src={singleArticle?.post_image} />
            <p>{singleArticle?.content}</p>
        </div>
    )
}

export default DetailSectionMiddle;