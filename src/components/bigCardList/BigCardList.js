import React from 'react';
import BigCard from '../bigCard/BigCard';
import {bigCardContent} from '../../data/bigCardData';

const BigCardList = () => {
    console.log(bigCardContent)
   return(
      <div className = 'bigCardListContainer'> 
          {bigCardContent.map((content,index)=>
              <BigCard
                  profileImage={content.profileImage}
                  username={content.username}
                  imageUrl={content.imageUrl}
                  title={content.title}
                  description={content.description}
                  date={content.date}
                  key={index}
              />
           
          )}  
      </div>
      
   )
} 

export default BigCardList;