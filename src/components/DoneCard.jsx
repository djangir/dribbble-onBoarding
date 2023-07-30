import React from "react";

function DoneCard(props) {
  const { heading, icon, subHeading } = props;
  return (
    <div className="d-flex justify-content-center align-items-center flex-column gap-5 my-5">
      <img src={icon} width="100" alt="done" className="pt-4" />
      <div>
        <div className="fs-3 fw-bold text-center">{heading}</div>
        <div className="text-center text-secondary"> {subHeading}</div>
      </div>
    </div>
  );
}

export default DoneCard;
