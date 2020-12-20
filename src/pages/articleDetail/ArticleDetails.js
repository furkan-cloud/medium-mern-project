import React from 'react';
import DetailSectionLeft from '../../components/detailSectionLeft/DetailSectionLeft';
import DetailSectionMiddle from '../../components/detailSectionMiddle/DetailSectionMiddle';
import DetailSectionRight from '../../components/detailSectionRight/DetailSectionRight';
import { articleContent } from '../../data/articleData';
import './ArticleDetails.css';

const ArticleDetails = () => {
    console.log(articleContent);
    return (
        <div className='articleDetailContainer'>
                <DetailSectionLeft />
                <DetailSectionMiddle />
                <DetailSectionRight />
        </div>

    )
}

export default ArticleDetails;