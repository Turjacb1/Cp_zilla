import React from 'react';
import './hospital.css'; // Import the CSS file for styling
import Footer from '../../Footer/Footer';

const Hospital = () => {
  const hospitals = [
    {
      name: "Chandpur General Hospital (PVT.)",
      address: "Cumilla Rd",
      phone: "01711-033702",
      website: null,
    },
    {
      name: "Chandpur Medical College & Hospital",
      address: "কবি নজরুল সড়ক",
      phone: "01827-150932",
      website: "Website",
    },
    {
      name: "২৫০ শয্যা বিশিষ্ট জেনারেল হাসপাতাল, চাঁদপুর",
      address: "6MF3+934, Kabi Nazrul Rd",
      phone: "01612-968241",
      website: null,
    },
    {
      name: "Central Hospital",
      address: "6MG5+PHF, Shahid Muktijoddha Rd",
      phone: "01711-042907",
      website: null,
    },
    {
      name: "Chandpur City Hospital",
      address: "6MJ7+9Q9, Stadium Rd",
      phone: "01902-248391",
      website: null,
    },
    {
      name: "Chandpur Al Amin Hospital",
      address: "Horodoyal Rd",
      phone: "01710-102246",
      website: null,
    },
    {
      name: "Chandpur Diabetic Hospital",
      address: "Comilla - Chandpur Hwy",
      phone: "01711-475971",
      website: null,
    },
    {
      name: "Bellevue Hospital",
      address: "Dorji ghat BONGOBANDHU SHARAK",
      phone: "01711-159815",
      website: null,
    },
    {
      name: "Al Manar Hospital Private Ltd",
      address: "6MH7+5HG, Mission Rd",
      phone: "01761-964455",
      website: null,
    },
    {
      name: "Chandpur Medical Center",
      address: "6MMC+M8F Chairman Ghat, Comilla - Chandpur Hwy",
      phone: "01784-580167",
      website: null,
    },
    {
      name: "Chandpur Modern Hospital (Pvt)",
      address: "Bangabandu Rd",
      phone: "01747-586058",
      website: null,
    },
    {
      name: "Rainbow Hospital",
      address: "652 Mission Rd",
      phone: "01715-511833",
      website: "Website",
    },
    {
      name: "Moon Hospital (Pvt)",
      address: "Stadium Rd",
      phone: "01867-143464",
      website: null,
    },
    {
      name: "Disease of the Chest Clinic",
      address: "6MH7+FQ8, Stadium Rd",
      phone: null,
      website: null,
    },
    {
      name: "Midland Hospital Private Ltd",
      address: "6MF6+X2G, Haji Mohsin Rd",
      phone: "01712-633457",
      website: null,
    },
    {
      name: "Chandpur Adhunik Chokkhu Hashpatal (CACH)",
      address: "Holding No 0280, Saudia City, Cumilla Rd",
      phone: "01779-194546",
      website: null,
    },
    {
      name: "Famous Specialized Hospital and Trauma Centre",
      address: "6MM9+9F2",
      phone: "01747-474719",
      website: "Website",
    },
    {
      name: "Mother & Child Care Hospital Private Ltd",
      address: "6MH8+9HQ, Bangabandu Rd",
      phone: "01727-567316",
      website: null,
    },
    {
      name: "Karnofuli Hospital Chandpur",
      address: "6MJ6+MG9, Unnamed Road",
      phone: "01869-708139",
      website: null,
    },
    {
      name: "Premier Hospital & Diagnostic Centre",
      address: "6MF6+R3X, Haji Mohsin Rd",
      phone: "01963-911451",
      website: null,
    },
    {
      name: "General hospital",
      address: "6MF3+67F",
      phone: null,
      website: null,
    },
    {
      name: "Al-Khidmah Medical Services (Pvt.), Chandpur",
      address: "Stadium Rd",
      phone: "01718-294444",
      website: null,
    },
    {
      name: "Mazharul Haque BNSB Eye Hospital",
      address: "Chandpur",
      phone: "01615-229122",
      website: "Website",
    },
    {
      name: "Barakah Hospital",
      address: "6MM7+3P5, Stadium Rd",
      phone: "01841-404244",
      website: null,
    },
    {
      name: "Royal Hospital Private Ltd",
      address: "6MH5+FH5, Haji Mohsin Rd",
      phone: "01874-675660",
      website: null,
    },
    {
      name: "Navana Hospital Private Ltd.",
      address: "6MG8+C8C, Stadium Rd",
      phone: "01711-028880",
      website: null,
    },
    {
      name: "Chandpur MATS",
      address: "Haji Mohsin Rd",
      phone: "01915-421911",
      website: null,
    },
    {
      name: "Crescent Hospital Private Ltd",
      address: "6MM9+7F3, Road 4",
      phone: "01710-291032",
      website: null,
    },
    {
      name: "Bashundhara Hospital",
      address: "6MM9+PFF",
      phone: "01718-450458",
      website: null,
    },
    {
      name: "Aalok Hospital-আলোক হাসপাতাল",
      address: "Opposite of tax office, stadium road",
      phone: "01687-359607",
      website: null,
    },
    {
      name: "New Life Diagnostic Center Chandpur",
      address: "259 Cumilla Rd",
      phone: "01924-800145",
      website: "Website",
    },
    {
      name: "Mohona Diagnostic Centre",
      address: "6MG5+H2Q",
      phone: "01826-502426",
      website: null,
    },
    {
      name: "Dr. Lal pathlabs (Chandpur Healthcare)",
      address: "6MJ7+R6G",
      phone: "01404-186551",
      website: null,
    },
    {
      name: "BAVS Chandpur Clinic",
      address: "272 - kazi kanon, GT Road (Dokkhin), Chairman ghat",
      phone: "01825-762714",
      website: "Website",
    },
    {
      name: "মা ও শিশু কল্যাণ কেন্দ্র চাঁদপুর",
      address: "Unnamed Road",
      phone: "01745-058909",
      website: null,
    },
    {
      name: "C.V Hospital",
      address: "6MG3+2V7, Chandpur, bashkhali",
      phone: "01873-565067",
      website: null,
    },
  ];
  
  return (
    <div className="hospital-container">
      <h1 className="hospital-header">Hospitals in Chandpur</h1>
      <table className="hospital-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {hospitals.map((hospital, index) => (
            <tr key={index}>
              <td>{hospital.name}</td>
              
              <td>{hospital.address}</td>
              
              <td>{hospital.phone}</td>
              <td>
                {hospital.website ? (
                  <a href="#">{hospital.website}</a>
                ) : (
                  'N/A'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default Hospital;
