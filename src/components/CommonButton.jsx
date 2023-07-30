import React from "react";

function CommonButton(props) {
  const { title, onclick } = props;
  return (
    <div>
      <div onClick={onclick} class="btn btn-primary form-control p-2">
        {title}
      </div>
    </div>
  );
}

export default CommonButton;
