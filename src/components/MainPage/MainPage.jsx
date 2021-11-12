import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Header/Header";
import PartnersGallery from "../Partners/PartnersGallery";
import { navHandler } from "../../Redux/Middleware/navHandler";

const MainPage = () => {
  const { profileName, isNavMobileVisible, cards } = useSelector(
    (state) => state.mainPage
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(navHandler());
  }, [dispatch]);

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
