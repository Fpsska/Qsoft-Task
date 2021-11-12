import React from "react";

const PartnerCard = (props) => {
  return (
    <figure className="partner-card">
      <img
        className="partner-card__image"
        src={require(`../../assets/images/${props.image}`).default}
        alt="company"
      />
    </figure>
  );
};

export default PartnerCard;
