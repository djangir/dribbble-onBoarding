import React from "react";

function CardBox(props) {
  const { heading, icon, subHeading, onclick, className } = props;
  return (
    <div className={`cardBox ${className}`} onClick={onclick}>
      <img src={icon} width="30" />
      <div className="fs-4 fw-bold">{heading}</div>
      <div>{subHeading}</div>
    </div>
  );
}

export default CardBox;
