import React from "react";
import "./Partners.scss"
import PartnerCard from "./PartnersCard";

const PartnersGallery = (props) => {
    const partnersGallery = props.cards.map(item => {
        return (
            <PartnerCard
            key={item.id}
            />
        )
    })
    return <div className="partners__gallery">{partnersGallery}</div>
}

export default PartnersGallery;