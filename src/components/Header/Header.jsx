import React, { useEffect } from "react";
import logo from "../../assets/images/logo.svg";
import profileImage from "../../assets/images/profile-image.png";
import SvgTemplate from "../Common/SvgTemplate";
import Input from "../Common/Input/Input";
import "./Header.scss";

const Header = ({isNavMobileVisible, navHandler, profileName}) => {
  useEffect(() => {
    navHandler();
  }, []);

  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__section">
          <a className="header__logo logo" href="https://qsoft.ru/" target="_black">
            <img className="logo__image" src={logo} alt="logo" />
          </a>
        </div>
        {/* /.section 1 */}
        <>
          {isNavMobileVisible ? (
            <></>
          ) : (
            <div className="header__section header__section__search">
              <Input isNavMobileVisible={isNavMobileVisible} />
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
          <Input isNavMobileVisible={isNavMobileVisible} />
        ) : (
          <></>
        )}
      </>
    </header>
  );
};

export default Header;
