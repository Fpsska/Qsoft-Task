import React from "react";


const PartnerCard = (props) => {
    return (
        <div className="partner-card">
            <img className="partner-card__image" src={`../../assets/images/${props.image}`} alt="company" />
        </div>
    )
}

export default PartnerCard;