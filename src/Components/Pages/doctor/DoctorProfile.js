import React from 'react';
import './DoctorProfile.css';

const DoctorProfile = ({ doctor }) => {
  return (
    <div className="doctor-card">
      <div className="doctor-card-body">
        <h2 className="doctor-name">{doctor.name}</h2>
        <p className="doctor-department">{doctor.doctorType}</p>
        <div className="doctor-details">
          <p className="doctor-phone">Phone: {doctor.phone}</p>
          <p className="doctor-Address">Address: {doctor.address}</p>
        </div>
        
      </div>
    </div>
  );
};

export default DoctorProfile;
