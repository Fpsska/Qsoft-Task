import React from "react";
import Header from "../Header/Header";
import PartnersGallery from "../Partners/PartnersGallery";

const MainPage = (props) => {
  return (
    <>
      <Header
        profileName={props.profileName}
        isNavMobileVisible={props.isNavMobileVisible}
        navHandler={props.navHandler}
      />
      <main>
        <div className="container">
          <div className="partners">
            <div className="partners__wrapper">
              <h1 className="partners__title">Наши партнеры</h1>
              <PartnersGallery cards={props.cards} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPage;
