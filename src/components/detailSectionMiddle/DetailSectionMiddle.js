import ArticleProfile from '../../components/articleProfile/ArticleProfile';
import './DetailSectionMiddle.css';
import ReactHtmlParser from "react-html-parser";
import Upload from "../icons/Upload"
import Bookmark from '../icons/Bookmark';
import ThreeDots from '../icons/ThreeDots';

const DetailSectionMiddle = ({singleArticle}) => {


    return (
        <div className='articleDetailMiddle'>
            <h1 className='articleTitle'>{singleArticle?.title}</h1>
            <ArticleProfile
            formatDate = {singleArticle?.formatDate} 
            author = {singleArticle?.author} />
            <div className="middle_icons">
                <Upload/>
                <Bookmark/>
                <ThreeDots/>
            </div>
            <img className='articleMainImage' src={singleArticle?.post_image} />
            <p>{ReactHtmlParser(singleArticle?.content)}</p>
        </div>
    )
}

export default DetailSectionMiddle;