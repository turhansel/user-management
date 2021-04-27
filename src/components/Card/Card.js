import React from "react";
import "./Card.scss";

const Card = (props) => {
  return <div className={`card ${props.className}`}>{props.children}</div>;
};

export default Card;
