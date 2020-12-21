import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faBookmark,
    faComment,
    faSignLanguage,
    faUpload
  } from "@fortawesome/free-solid-svg-icons";

const ArticleDetailCard = (props) => {
    return(
        <div className="article-detail-container">
            <p>
                {props.date}
            </p>
            <h1>
                {props.title}
            </h1>
            <img src={props.imageUrl} />
            <p>
                {props.articleText}
            </p>
            <a href="/articleDetails">
                {props.readTime}
            </a>

            <div>
                <div>
                    <FontAwesomeIcon
                        icon={faSignLanguage}
                        style={{ color: "#bdbdbd" }}
                        size="2x"
                />
                <div className="applause">200</div>
                <FontAwesomeIcon
                    icon={faComment}
                    style={{ color: "#bdbdbd" }}
                    size="2x"
                />
                <div className="comment">20</div>
                </div>

                <div>
                    <FontAwesomeIcon
                        icon={faBookmark}
                        style={{ color: "#bdbdbd" }}
                        size="2x"
                    />
                     <FontAwesomeIcon
                        icon={faUpload}
                        style={{ color: "#bdbdbd" }}
                        size="2x"
                    />
                </div>
            </div>
        </div>
    )
}

export default ArticleDetailCard;