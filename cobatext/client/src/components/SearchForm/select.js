import React from "react";

export const Select = ({ props, children }) => (
  <div className="form-group">
    <select className="form-control" {...props}>
      {children}
    </select>
  </div>
);
