import React from "react";

const PartnerCard = (props) => {
    return (
        <div className="partner-card">
            <img className="partner-card__image" src={require(`../../assets/images/${props.image}`).default} alt="company" />
        </div>
    )
}

export default PartnerCard;