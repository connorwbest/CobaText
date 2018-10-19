import React from "react";

export const TextArea = (props, children) => (
  <div className="form-group">
    <textarea className="form-control" {...props} />
  </div>
);
