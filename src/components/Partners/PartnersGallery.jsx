import React from "react";
import PartnerCard from "./PartnersCard";
import "./Partners.scss";

const PartnersGallery = (props) => {
  const partnersGallery = props.cards.map((item) => {
    return <PartnerCard key={item.id} image={item.image} />;
  });
  return <div className="partners__gallery">{partnersGallery}</div>;
};

export default PartnersGallery;
