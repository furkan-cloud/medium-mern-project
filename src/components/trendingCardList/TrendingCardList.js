import React, { useContext } from 'react';
import TrendingCard from '../trendingCard/TrendingCard';
import './TrendingCardList.css';
import UserContext from '../../context/UserContext'


const TrendingCardList = () => {
  //   console.log(cardContent)
  const { articles } = useContext(UserContext);
  
  return (
    <div className='TrendingCardListContainer'>
      {articles?.slice(0,6).map((article, index) =>
        <TrendingCard
          id={article?._id}
          authorId={article?.author._id}
          firstName={article?.author.firstName}
          title={article?.title}
          profileImage = {article?.author.avatar_img}
          date={article?.formatDate}
          key={index}
        />

      )}
    </div>
  )
}

export default TrendingCardList;