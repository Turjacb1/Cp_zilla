import React, { useState } from 'react';
import './New_Hospital.css';

const New_Hospital = () => {
  const [formData, setFormData] = useState({
    hospitalName: '',
    address: '',
    hours: '',
    phone: '',
    website: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add logic to handle form submission (e.g., send data to the backend)
    setFormData({
      hospitalName: '',
      address: '',
      hours: '',
      phone: '',
      website: '',
    });
  };

  return (
    <div className="new-hospital-container">
      <h2 className="form-title">Add New Hospital</h2>
      <form onSubmit={handleSubmit} className="new-hospital-form">
        <div className="form-group">
          <label htmlFor="hospitalName">Hospital Name</label>
          <input
            type="text"
            id="hospitalName"
            name="hospitalName"
            value={formData.hospitalName}
            onChange={handleChange}
            placeholder="Enter Hospital Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter Address"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="hours">Hours</label>
          <input
            type="text"
            id="hours"
            name="hours"
            value={formData.hours}
            onChange={handleChange}
            placeholder="Enter Working Hours (e.g., 9 AM - 5 PM)"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Phone Number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="website">Website</label>
          <input
            type="url"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="Enter Website URL"
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default New_Hospital;
