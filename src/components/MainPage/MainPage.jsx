import React from "react";
import Header from "../Header/Header";
import PartnersGallery from "../Partners/PartnersGallery";

const MainPage = ({profileName, isNavMobileVisible, navHandler, cards}) => {
  return (
    <>
      <Header
        profileName={profileName}
        isNavMobileVisible={isNavMobileVisible}
        navHandler={navHandler}
      />
      <main>
        <div className="container">
          <div className="partners">
            <div className="partners__wrapper">
              <h1 className="partners__title">Наши партнеры</h1>
              <PartnersGallery cards={cards} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPage;
