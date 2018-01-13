import React from "react";
import Logo from '../Logo/city.jpeg';

export const Container = ({ fluid, children }) =>
  <div className={`container${fluid ? "-fluid" : ""}`} style={{padding:"100px", }}>
    {children}
  </div>;
