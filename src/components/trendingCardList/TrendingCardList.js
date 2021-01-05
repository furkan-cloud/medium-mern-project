import React, { useContext, useEffect, useState } from "react";
import TrendingCard from "../trendingCard/TrendingCard";
import "./TrendingCardList.css";
import UserContext from "../../context/UserContext";
import axios from "axios";

const TrendingCardList = () => {
  const [trends, setTrends] = useState(null);
  //   console.log(cardContent)
  const { articles } = useContext(UserContext);

  useEffect(() => {
    const fetchArticles = async () => {
      const articleData = await axios.get(
        "http://localhost:5000/api/posts?limit=6&sortBy=most-claps"
      );
      //console.log(articleData.data.data);
      setTrends(articleData.data.data);
    };
    fetchArticles();
  }, []);

  return (
    <div className="TrendingCardListContainer">
      {trends?.slice(0, 6).map((article, index) => (
        <TrendingCard
          id={article?._id}
          authorId={article?.author._id}
          firstName={article?.author.firstName}
          lastName={article?.author.lastName}
          title={article?.title}
          profileImage={article?.author.avatar_img}
          date={article?.formatDate}
          number={index}
          key={index}
        />
      ))}
    </div>
  );
};

export default TrendingCardList;
