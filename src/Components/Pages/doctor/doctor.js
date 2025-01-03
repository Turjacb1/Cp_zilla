// import React from 'react';
// import DoctorProfile from './DoctorProfile';

// const doctor = () => {
//   const doctors = [
//     {
//       name: 'Dr. John Doe',
//       department: 'Cardiologist - হৃদরোগ বিশেষজ্ঞ',
//       phone: '123-456-7890',
//       Address: '123 Heart St, City, Country'
//     },
//     {
//       name: 'Dr. Jane Smith',
//       department: 'Neurologist - স্নায়ুরোগ বিশেষজ্ঞ',
//       phone: '234-567-8901',
//       Address: '456 Brain Ave, City, Country'
//     },
//     {
//       name: 'Dr. Robert Brown',
//       department: 'Orthopedic Surgeon - হাড় ও অস্থি বিশেষজ্ঞ',
//       phone: '345-678-9012',
//       Address: '789 Bone Rd, City, Country'
//     },
//     {
//       name: 'Dr. Emily White',
//       department: 'Immunologist',
//       phone: '456-789-0123',
//       Address: '101 Immune Ln, City, Country'
//     },{
//       name: 'Dr. Emily White',
//       department: 'Immunologist',
//       phone: '456-789-0123',
//       Address: '101 Immune Ln, City, Country'
//     },
//     {
//       name: 'Dr. Emily White',
//       department: 'Immunologist',
//       phone: '456-789-0123',
//       Address: '101 Immune Ln, City, Country'
//     }
//   ];

//   return (
//     <div className="doctor-page">
//       <h1>Doctor Profiles</h1>
//       <div className="doctor-list">
//         {/* Loop through doctors array and display each DoctorProfile */}
//         {doctors.map((doctor, index) => (
//           <DoctorProfile key={index} doctor={doctor} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default doctor;




import React, { useEffect, useState } from 'react';
import DoctorProfile from './DoctorProfile';

const Doctor = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch doctors from the backend
    const fetchDoctors = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/doctors');
        const data = await response.json();
        if (response.ok) {
          setDoctors(data);
        } else {
          console.error('Error fetching doctors:', data);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className="doctor-page">
      <h1>Doctor Profiles</h1>
      <div className="doctor-list">
        {/* Loop through doctors array and display each DoctorProfile */}
        {doctors.map((doctor, index) => (
          <DoctorProfile key={index} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Doctor;
