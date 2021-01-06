import React, { useContext } from "react";
import Card from "../card/Card";
import UserContext from "../../context/UserContext";

const CardList = () => {
  const { articles } = useContext(UserContext);

  return (
    <div className="cardListContainer">
      {articles?.slice(0, 4).map((article, index) => (
        <Card
          id={article?._id}
          authorId={article?.author._id}
          username={article?.author.firstName + " " + article?.author.lastName}
          title={article?.title}
          profileImage={article?.author.avatar_img}
          date={article?.formatDate}
          imageUrl={article?.post_image}
          key={index}
        />
      ))}
    </div>
  );
};

export default CardList;
