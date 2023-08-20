import React from "react";
import "./Card.css";

const Card = ({ emoji, heading, detail, color }) => {
  return (
    <div className="card" style={{ borderColor: { color } }}>
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <a
        href="https://www.notion.so/ee0f1353872542f4b19fb52e6eb1663f?pvs=4"
        className="c-button"
      >
        더보기
      </a>
    </div>
  );
};

export default Card;
