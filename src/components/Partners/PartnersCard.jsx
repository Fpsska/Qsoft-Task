import React from "react";

const PartnerCard = ({image}) => {
  return (
    <figure className="partner-card">
      <img
        className="partner-card__image"
        src={require(`../../assets/images/${image}`).default}
        alt="company"
      />
    </figure>
  );
};

export default PartnerCard;
