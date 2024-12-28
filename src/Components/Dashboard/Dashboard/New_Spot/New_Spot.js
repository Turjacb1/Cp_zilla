import React, { useState } from 'react';
import './New_Spot.css';
import Footer from '../../../Footer/Footer';

const New_Spot = () => {
  const [formData, setFormData] = useState({
    placeName: '',
    details: '',
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
      placeName: '',
      details: '',
    });
  };

  return (
    <div className="new-spot-container">
      <h2 className="form-title">Add New Spot</h2>
      <form onSubmit={handleSubmit} className="new-spot-form">
        <div className="form-group">
          <label htmlFor="placeName">Place Name</label>
          <input
            type="text"
            id="placeName"
            name="placeName"
            value={formData.placeName}
            onChange={handleChange}
            placeholder="Enter the place name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="details">Details</label>
          <textarea
            id="details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            placeholder="Enter details (location, how to go, etc.)"
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
      <Footer/>
    </div>
  );
};

export default New_Spot;
