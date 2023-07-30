import React from "react";

function InputBox(props) {
  const { label, boxInput, isOptional } = props;

  if (boxInput) {
    return (
      <div className="input-group mb-3">
        <label htmlFor="basic-url">
          {label} {isOptional && "(optional)"}
        </label>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">{boxInput}</span>
          </div>
          <input
            {...props}
            className="form-control"
            aria-describedby="basic-addon3"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">
        {label} {isOptional && "(optional)"}
      </label>
      <input className="form-control" {...props} />
    </div>
  );
}

export default InputBox;
