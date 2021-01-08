import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import axios from 'axios'
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const Card = (props) => {
  const { userData, setUserData } = useContext(UserContext)

  const handleDelete = async () => {
    let token = localStorage.getItem("token");
    if (token) {
      const articleDeleteResponse = await axios.delete(
        `http://localhost:5000/api/posts/${props.id}/delete`,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      setUserData({ ...userData, user: articleDeleteResponse.data })
      console.log(articleDeleteResponse.data)
    }
  };
  return (
    <div className="card-container">
      <div className="text-container">
        <Link to={`/profileDetail/${props.authorId}`}>
          <div className="username">
            <img
              className="card-profileImage"
              src={props.profileImage}
              alt=""
            />
            <span>{props.username}</span>
          </div>
        </Link>
        <Link to={`/articleDetail/${props.id}`}>
          <div className="title">{props.title}</div>
        </Link>
        <div className="date">{props.date}</div>
      </div>

      <div className="image-container">
        <img className="card-image" src={props.imageUrl} alt="" />
        {
          props.delete && <div className = 'articleDeleteButton' onClick={handleDelete}>Delete</div>
        }
      </div>

    </div>
  );
};

export default Card;
