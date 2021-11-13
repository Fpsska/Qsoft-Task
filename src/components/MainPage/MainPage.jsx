import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Header/Header";
import PartnersGallery from "../Partners/PartnersGallery";

import { switchHeaderNav } from "../../Redux/actions";

const MainPage = () => {
  const { profileName, isNavMobileVisible, cards } = useSelector(
    (state) => state.mainPage
  );

  const dispatch = useDispatch();

  const defineNavStatus = () => {
    if (window.innerWidth < 720) {
      dispatch(switchHeaderNav(true));
    } else if (window.innerWidth > 720) {
      dispatch(switchHeaderNav(false));
    }
  };

  useEffect(() => {
    window.addEventListener("resize", defineNavStatus);
    window.addEventListener("load", defineNavStatus);
    return () => {
      window.removeEventListener("resize", defineNavStatus);
      window.removeEventListener("load", defineNavStatus);
    };
  }, []);

  return (
    <>
      <Header
        profileName={profileName}
        isNavMobileVisible={isNavMobileVisible}
      />
      <main>
        <div className="container">
          <div className="partners">
            <div className="partners__wrapper">
              <h1 className="partners__title">Наши партнёры</h1>
              <PartnersGallery cards={cards} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPage;
