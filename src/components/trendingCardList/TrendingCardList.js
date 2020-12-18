import React from 'react';
import TrendingCard from '../trendingCard/TrendingCard';
import {trendingCardContent} from '../../data/trendingCardData';
import './TrendingCardList.css';


  const TrendingCardList = () => {
    //   console.log(cardContent)
     return(
        <div className = 'TrendingCardListContainer'> 
            {trendingCardContent.map((trendingcontent,index)=>
                <TrendingCard
                    userprofile={trendingcontent.userprofile}
                    username={trendingcontent.username}
                    title={trendingcontent.title}
                    date={trendingcontent.date}
                    key={index}
                />
             
            )}  
        </div>        
     )
  } 

export default TrendingCardList;