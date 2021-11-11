import React from "react";
import logo from "../../assets/images/logo.svg";
import profileImage from "../../assets/images/profile-image.png";
import "./Header.scss";

const Header = (props) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <img className="header__image" src={logo} alt="logo" />
          <input className="header__input input" type="text" placeholder="Найти..." />
          <div className="header__profile profile">
            <span className="profle__name">{props.profileName}</span>
            <img
              className="profile__image"
              src={profileImage}
              alt="profile-image"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
