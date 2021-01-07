import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import BigCard from "../bigCard/bigCard";

const BigCardList = () => {
  const { articles } = useContext(UserContext);
  //console.log(articles)
  return (
    <div className="bigCardListContainer">
      {articles?.slice(0, 10).map((article, index) => (
        <BigCard
          id={article._id}
          authorId={article.author._id}
          profileImage={article.author.avatar_img}
          username={article.author.firstName + " " + article.author.lastName}
          imageUrl={article.post_image}
          title={article.title}
          description={article.content}
          date={article.formatDate}
          key={index}
          likes={article.likes}
        />
      ))}
    </div>
  );
};

export default BigCardList;
