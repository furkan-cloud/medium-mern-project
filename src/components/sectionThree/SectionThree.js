import React, { useContext } from "react";
import "./SectionThree.css";
import BigCardList from "../bigCardList/BigCardList";
import ReadingCard from "../readingCard/ReadingCard";
import FooterList from "../footerList/FooterList";
import UserContext from "../../context/UserContext";
import DoubleBookmark from "../icons/DoubleBookmark";
const SectionThree = () => {
  const { userData } = useContext(UserContext);
  return (
    <div className="sectionThreeContainer">
      <div className="bigCard-container">
        <BigCardList />
      </div>
      <div className="sectionThreeRightContainer">
        <div className="sectionThree-right">
          {userData?.user?.readingList?.length > 0 && (
            <div className="reading_list-container">
              <DoubleBookmark className="double_bookmark" />
              <p className="reading_list"> READING LIST </p>
            </div>
          )}
          {userData?.user?.readingList
            ?.slice(0, 6)
            .map((readingContent, index) => (
              <ReadingCard
                id={readingContent?._id}
                authorId={readingContent?.author?._id}
                profileImage={readingContent?.author?.avatar_img}
                firstName={readingContent?.author?.firstName}
                lastName={readingContent?.author?.lastName}
                imageUrl={readingContent?.post_image}
                title={readingContent?.title}
                date={readingContent?.formatDate}
                key={index}
              />
            ))}
        </div>
        <div className="footerContainer">
          <FooterList id="footer-list" />
        </div>
      </div>
    </div>
  );
};
export default SectionThree;