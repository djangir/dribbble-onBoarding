import React from "react";

function InputBox(props) {
  const { label, boxInput, isOptional } = props;

  if (boxInput) {
    return (
      <div class="input-group mb-3">
        <label for="basic-url">
          {label} {isOptional && "(optional)"}
        </label>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">{boxInput}</span>
          </div>
          <input
            {...props}
            class="form-control"
            aria-describedby="basic-addon3"
          />
        </div>
      </div>
    );
  }

  return (
    <div class="mb-3">
      <label for="exampleFormControlInput1" className="form-label">
        {label} {isOptional && "(optional)"}
      </label>
      <input className="form-control" {...props} />
    </div>
  );
}

export default InputBox;
