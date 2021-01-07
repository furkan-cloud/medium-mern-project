import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DetailSectionLeft from "../../components/detailSectionLeft/DetailSectionLeft";
import DetailSectionMiddle from "../../components/detailSectionMiddle/DetailSectionMiddle";
import DetailSectionRight from "../../components/detailSectionRight/DetailSectionRight";
import "./ArticleDetails.css";
import Footer from "../../components/footer/Footer";

const ArticleDetails = () => {
  //console.log(articleContent);
  const { id } = useParams();
  const [singleArticle, setSingleArticle] = useState(null);

  useEffect(() => {
    const fetchSingleArticle = async () => {
      const singleArticleData = await axios.get(`/api/posts/${id}`);
      setSingleArticle(singleArticleData?.data.data);
    };
    fetchSingleArticle();
  }, [id]);

  return (
    <div className="articleDetailContainer">
      <div className="articleDetailContainerTop">
        <DetailSectionLeft singleArticleLeft={singleArticle} />
        <DetailSectionMiddle singleArticle={singleArticle} />
        <DetailSectionRight />
      </div>
      <div className="articleDetailContainerBottom">
        <Footer />
      </div>
    </div>
  );
};

export default ArticleDetails;
