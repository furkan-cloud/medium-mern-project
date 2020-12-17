import React from 'react';
import TrendingCard from '../trendingCard/TrendingCard';
import {cardContent} from '../../data/cardData';
import './TrendingCardList.css';


  const TrendingCardList = () => {
    //   console.log(cardContent)
     return(
        <div className = 'TrendingCardListContainer'> 
            {cardContent.map((content,index)=>
                <TrendingCard
                    userprofile={content.userprofile}
                    username={content.username}
                    title={content.title}
                    date={content.date}
                    key={index}
                />
             
            )}  
        </div>        
     )
  } 

export default TrendingCardList;