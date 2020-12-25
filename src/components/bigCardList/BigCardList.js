import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import BigCard from "../bigCard/BigCard";

const BigCardList = () => {
  const { articles } = useContext(UserContext);
  //console.log(articles)
  return (
    <div className="bigCardListContainer">
      {articles?.map((content, index) => (
        <BigCard
          id={content._id}
          authorId={content.author._id}
          profileImage={content.author.avatar_img}
          username={content.author.firstName + content.author.lastName}
          imageUrl={content.post_image}
          title={content.title}
          description={content.content}
          date={content.createdAt}
          key={index}
        />
      ))}
    </div>
  );
};

export default BigCardList;
