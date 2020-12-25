import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './ArticleDetailCard.css'
import Claps from "../icons/Claps"
import Bookmark from "../icons/Bookmark"


import {
    faBookmark,
    faComment,
    faSignLanguage,
    faUpload
  } from "@fortawesome/free-solid-svg-icons";
import Comment from '../icons/Comment';
import Upload from '../icons/Upload';

const ArticleDetailCard = (props) => {
    return(
        <div className="article-detail-container">
            <p>
                {props.date}
            </p>
            <h1>
                {props.title}
            </h1>
            <img className="articleDetailImage" src={props.imageUrl} />
            <p>
                {props.articleText}
            </p>
            <a href="/articleDetails">
                {props.readTime}
            </a>

            <div>
                <div>
                    <Claps/>
                <div className="applause">200</div>
                    <Comment/>
                <div className="comment">20</div>
                </div>

                <div>
                    <Bookmark/>
                    <Upload/>
                </div>
            </div>
        </div>
    )
}

export default ArticleDetailCard;