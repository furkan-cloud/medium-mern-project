import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import DetailSectionLeft from '../../components/detailSectionLeft/DetailSectionLeft';
import DetailSectionMiddle from '../../components/detailSectionMiddle/DetailSectionMiddle';
import DetailSectionRight from '../../components/detailSectionRight/DetailSectionRight';
import { articleContent } from '../../data/articleData';

import './ArticleDetails.css';

const ArticleDetails = () => {
    //console.log(articleContent);
    const { id } = useParams();
    const [singleArticle, setSingleArticle] = useState(null);

    useEffect(() => {
        const fetchSingleArticle = async () => {
            const singleArticleData = await axios.get(`http://localhost:5000/api/posts/${id}`)
            setSingleArticle(singleArticleData?.data.data);
            console.log(singleArticleData?.data.data)
        }
        fetchSingleArticle();
    }, [id]);

    return (
        <div className='articleDetailContainer'>
            <DetailSectionLeft  />
            <DetailSectionMiddle singleArticle = {singleArticle} />
            <DetailSectionRight />
        </div>

    )
}

export default ArticleDetails;

// const [userDetail, setUserDetail] = useState();

// useEffect(() => {
//   fetchData(`/user/${id}`)
//     .then((res) => setUserDetail(res))
//     .catch((err) => console.log(err))
//     .finally();
// }, [id]);

// const history = useHistory();
// const { id } = useParams();

// const handlePostButtonClick = () => {
//   history.push(`/user/${id}/post`);
// };
// const handleBackButtonClick = () => {
//   history.push("/");
// };