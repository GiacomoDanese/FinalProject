import React from "react";
import "./List.css";

export const List = ({ children }) => {
  return (
    <div className="list-overflow-container" style={{marginLeft: "auto", marginRight: "auto", width: "85%" }}>
      <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};
