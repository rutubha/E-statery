import React from "react";
import "./propertyCard.css";

const PropertyCard = (props) => {
  const property = props.property;
  return (
    <div className="card">
      <div>
        <div className="image">
          <img src={process.env.PUBLIC_URL + "/logo512.png"} alt="image3" />
        </div>
        <div className="card-body">
          <div className="header-title">
            <div className="title">
              <div className="price">${property.price}/Month</div>
              <div className="name">{property.name}</div>
            </div>
            <div className="favroute">icon</div>
          </div>
          <div className="address">{property.street}</div>
          <div className="footer">
            <div>{property.room.beds} Beds</div>
            <div>{property.room.bathroomes} Bathrooms</div>
            <div>{property.room.area} m x m </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
