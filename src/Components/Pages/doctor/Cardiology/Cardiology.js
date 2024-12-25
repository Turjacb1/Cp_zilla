import React from "react";
import "./cardiology.css"; // Import CSS file

const Cardiology = () => {
  const cardiologists = [
    {
      name: "Dr. Sarah Johnson",
      number: "(555) 123-4567",
      address: "123 Medical Lane, Springfield, IL 62704",
    },
  ];

  return (
    <div className="container">
      <h1 className="header">Cardiologists</h1>
      <table className="table">
        <thead>
          <tr>
            <th className="th">Name</th>
            <th className="th">Phone Number</th>
            <th className="th">Address</th>
          </tr>
        </thead>
        <tbody>
          {cardiologists.map((doctor, index) => (
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

export default Cardiology;
