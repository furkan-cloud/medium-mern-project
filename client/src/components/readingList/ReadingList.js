import React from "react";
import "./ReadingList.css";
import FooterList from "./FooterList"

const ReadingList = () => {
  return (
    <div style={{ flex: 1 }}>
      <div className="container">
        <div className="header">
          <p className>DISCOVER MORE OF WHAT MATTERS TO YOU</p>
        </div>
        <div className="box">
          <div className="box-content">
            <div className="box-box">
              <a href="#">Self</a>
            </div>
            <div  className="box-box">
              <a href="#">Relationships</a>
            </div>
            <div  className="box-box">
              <a href="#">Data Science</a>
            </div>
          </div>
          <div className="box-content">
          <div className="box-box">
              <a href="#">Programming</a>
            </div>
            <div  className="box-box">
              <a href="#">JavaScript</a>
            </div>
            <div  className="box-box">
              <a href="#">Productivity</a>
            </div>
          </div>
          <div className="box-content">
          <div className="box-box">
              <a href="#">Machine Learning</a>
            </div>
            <div  className="box-box">
              <a href="#">Politics</a>
            </div>
            <div  className="box-box">
              <a href="#">Healts</a>
            </div>
          </div>
        </div>
        <div className="topics">
          <a style={{ color: "green", fontWeight: "bold" }} href="#">
            See all topics
          </a>
        </div>
      </div>
    
      <div>
          <FooterList/>
      </div>
    </div>
  );
};

export default ReadingList;
