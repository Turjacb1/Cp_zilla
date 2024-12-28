import React from 'react';
import './Dashboard.css';
import Footer from '../../Footer/Footer';

const Dashboard = () => {
  const options = [
    { id: 1, name: 'Add New হাসপাতাল', path: '/add-hospital' },
    { id: 2, name: 'Add New বাসের সময়সূচি', path: '/add-bus-schedule' },
    { id: 3, name: 'Add New ট্রেনের সময়সূচি', path: '/add-train-schedule' },
    { id: 4, name: 'Add New লঞ্চ সময়সূচী', path: '/add-launch-schedule' },
    { id: 5, name: 'Add New দর্শনীয় স্থান', path: '/add-tourist-spot' },
    { id: 6, name: 'Add New বাসা ভাড়া', path: '/add-house-rent' },
    { id: 7, name: 'Add New ফায়ার সার্ভিস', path: '/add-fire-service' },
    { id: 8, name: 'Add New কুরিয়ার সার্ভিস', path: '/add-courier-service' },
    { id: 9, name: 'Add New বিদ্যুৎ অফিস', path: '/add-electricity-office' },
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-grid">
        {options.map((option) => (
          <div key={option.id} className="dashboard-card">
            <a href={option.path} className="dashboard-link">
              {option.name}
            </a>
          </div>
        ))}
        
      </div>
      <Footer/>
    </div>
    
  );
};

export default Dashboard;
