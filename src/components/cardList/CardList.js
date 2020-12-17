import React from 'react';
import Card from '../card/Card';
import {cardContent} from '../../data/cardData';


  const CardList = () => {
      console.log(cardContent)
     return(
        <div className = 'cardListContainer'> 
            {cardContent.map((content,index)=>
                <Card
                    userprofile={content.userprofile}
                    username={content.username}
                    imageUrl={content.imageUrl}
                    title={content.title}
                    date={content.date}
                    key={index}
                />
             
            )}  
        </div>
        
     )
  } 

export default CardList;