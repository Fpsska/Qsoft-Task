import React from "react";
import PartnerCard from "./PartnersCard";
import { useSelector } from "react-redux";
import "./Partners.scss";

const PartnersGallery = () => {
  const { cards } = useSelector((state) => state.mainPage);

  const partnersGallery = cards.map((item) => {
    return <PartnerCard key={item.id} image={item.image} />;
  });
  return <div className="partners__gallery">{partnersGallery}</div>;
};

export default PartnersGallery;
