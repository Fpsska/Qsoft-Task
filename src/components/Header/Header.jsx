import React from "react";
import { useSelector } from "react-redux";
import logo from "../../assets/images/logo.svg";
import profileImage from "../../assets/images/profile-image.png";
import SvgTemplate from "../Common/SvgTemplate";
import Form from "../Common/Form/Form";
import "./Header.scss";

const Header = () => {
  const { isNavMobileVisible, profileName } = useSelector(
    (state) => state.mainPage
  );

  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__section">
          <a
            className="header__logo logo"
            href="https://qsoft.ru/"
            target="_black"
          >
            <img className="logo__image" src={logo} alt="logo" />
          </a>
        </div>
        {/* /.section 1 */}
        <>
          {isNavMobileVisible ? (
            <></>
          ) : (
            <div className="header__section header__section__search">
              <Form isNavMobileVisible={isNavMobileVisible} />
            </div>
          )}
        </>
        {/* /.section 2 */}
        <>
          {isNavMobileVisible ? (
            <div className="header__section-profile">
              <div className="header__profile icon">
                <span className="icon__wrapper">
                  <SvgTemplate id="profile" />
                </span>
              </div>
            </div>
          ) : (
            <div className="header__section-profile">
              <div className="header__profile profile">
                <span className="profle__name">{profileName}</span>
                <img
                  className="profile__image"
                  src={profileImage}
                  alt="profile-image"
                />
              </div>
            </div>
          )}
        </>
        {/* /.section 3 */}
      </div>
      <>
        {isNavMobileVisible ? (
          <div className="header__section header__section__search--mobile">
            <Form isNavMobileVisible={isNavMobileVisible} />
          </div>
        ) : (
          <></>
        )}
      </>
    </header>
  );
};

export default Header;
