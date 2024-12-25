import React from "react";
import { Link } from "react-router-dom";
import "./doctor.css";

const doctor = () => {
  const departments = [
    { name: "Cardiology", path: "/cardiology" },
    { name: "Neurology", path: "/neurologist" },
    { name: "Pediatrics", path: "/pediatrics" },
    { name: "Dermatology", path: "/dermatology" },
  ];

  return (
    <div className="doctor-container">
      <h1 className="doctor-header">Departments</h1>
      <ul className="doctor-list">
        {departments.map((department, index) => (
          <li key={index} className="doctor-list-item">
            <Link to={department.path} className="doctor-link">
              {department.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default doctor;
