import React from "react";
import { Link } from "react-router-dom";
import MainCard from "../mainCard/MainCard";
import "./ProfilDetail.css";

const ProfilDetail = () => {
  return (
    <div className="profil__card__container">
      <div className="profil__card__header">
        <h2>Ezran Bayantemur</h2>
      </div>
      <div className="profil__card__subheader">
        <button className="profil__card__subheader__btn"> Following</button>
        <Link>
          <span> 507 </span> <span>Followers</span>
        </Link>
        <Link>
          <span>About</span>
        </Link>
      </div>
      <div className="profil__card__content">
        <div className="profil__card__content__left">
          <div>
            <img
              src="https://miro.medium.com/fit/c/262/262/1*o1a70lSEK0m0639JQWYmWg@2x.jpeg"
              alt=""
            />
          </div>

          <div className="profil__card__content__left__info">
            <p>ABOUT</p>
            <p>Ezran Bayantemur</p>
            <p>@ezranbayantemur</p>
          </div>
        </div>
        <div
          className="
          profil__card__content__right"
        >
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
        </div>
      </div>
    </div>
  );
};

export default ProfilDetail;
