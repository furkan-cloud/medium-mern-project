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
                <img className="card-image" src={props.imageUrl} alt=''/> 
            </div>

        </div>
    )
}

export default Card;


