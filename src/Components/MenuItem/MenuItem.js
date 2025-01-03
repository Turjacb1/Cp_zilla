import React from "react";
import { Link } from "react-router-dom";
import "./MenuItem.css";


const MenuItem = ({ title, icon, path }) => {
  return (
    <Link to={path} className="menu-item">
      <div className="menu-icon">{icon}</div>
      <p>{title}</p>
     
    </Link>
  );
};

export default MenuItem;
