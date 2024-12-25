import React from "react";
import "../Cardiology/cardiology.css"; // Import CSS file

const Neurologist = () => {
  const neurologists = [
    {
      name: "Dr. Michael Brown",
      number: "(555) 234-5678",
      address: "456 Health Blvd, Chicago, IL 60605",
    },
  ];

  return (
    <div className="container">
      <h1 className="header">Neurologists</h1>
      <table className="table">
        <thead>
          <tr>
            <th className="th">Name</th>
            <th className="th">Phone Number</th>
            <th className="th">Address</th>
          </tr>
        </thead>
        <tbody>
          {neurologists.map((doctor, index) => (
            <tr key={index}>
              <td className="td">{doctor.name}</td>
              <td className="td">{doctor.number}</td>
              <td className="td">{doctor.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Neurologist;
