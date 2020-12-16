import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className="card-container">
    
            <div className="text-container">
                <div className="username">
                    <a href="">{props.userprofile}</a>
                    {props.username}
                </div>
                <div className="title">{props.title}</div>
                <div className="date">{props.date}</div>
            </div>

            <div className="image-container">
                <img src={props.imageUrl} alt='' width="100" height="100" /> 
            </div>

        </div>
    )
}

export default Card;


{/* <div className="text-container">
                <div className="title"> <span>Don’t Choose Your Main Programming Language Before Reading This </span> </div>
                <div className="date"> <span>Dec 8·4 min read</span></div>
</div>*/}