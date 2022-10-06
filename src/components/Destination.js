import React from "react";
import locationPin from "../location.png";

function Destination(props) {
  return (
    <div className="destination-card">
      <div
        className="destination-image"
        style={{ backgroundImage: `url(${props.destination.image})` }}
      ></div>
      <div className="detail-box">
        <div className="location">
          <img
            className="location-icon"
            src={locationPin}
            alt="Location Icon"
          />
          <p className="location-title">{props.destination.location}</p>
          <a className="google-maps" href={props.destination.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h1>{props.destination.title}</h1>
        <div className="date">
          {props.destination.startDate}-{props.destination.endDate}
        </div>
        <p className="description">{props.destination.description}</p>
      </div>
    </div>
  );
}

export default Destination;
