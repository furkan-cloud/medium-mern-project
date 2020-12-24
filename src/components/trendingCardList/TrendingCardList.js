import React, { useContext } from 'react';
import TrendingCard from '../trendingCard/TrendingCard';
import { trendingCardContent } from '../../data/trendingCardData';
import './TrendingCardList.css';
import UserContext from '../../context/UserContext'


const TrendingCardList = () => {
  //   console.log(cardContent)
  const { articles } = useContext(UserContext);
  
  return (
    <div className='TrendingCardListContainer'>
      {articles?.map((article, index) =>
        <TrendingCard
          id={article?._id}
          firstName={article?.author.firstName}
          title={article?.title}
          profileImage = {article?.author.avatar_img}
          date={article?.createdAt}
          key={index}
        />

      )}
    </div>
  )
}

export default TrendingCardList;