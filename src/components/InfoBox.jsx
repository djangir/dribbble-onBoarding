import React from "react";

function InfoBox(props) {
  const { title, subTitle } = props;
  return (
    <div className="my-4">
      <div className="fs-2 text-center">{title}</div>
      <div className="text-secondary text-center">{subTitle}</div>
    </div>
  );
}

export default InfoBox;
