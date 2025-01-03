import React, { useState } from 'react';
import './New_Rent.css';
import Footer from '../../../Footer/Footer';

const New_Rent = () => {
  const [formData, setFormData] = useState({
    Address: '',
    rentDetails: '',
    photo: null,
    contact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add logic to handle form submission (e.g., send data to the backend)
    setFormData({
      Address: '',
      rentDetails: '',
      photo: null,
      contact: '',
    });
  };

  return (
    <div className="new-rent-container">
      <h2 className="form-title" style={{color:"blue"}}>Add New Rent Listing</h2>
      <form onSubmit={handleSubmit} className="new-rent-form">
        <div className="form-group">
          <label htmlFor="Address">Address</label>
          <input
            type="text"
            id="Address"
            name="Address"
            value={formData.Address}
            onChange={handleChange}
            placeholder="Enter Address"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="rentDetails">Rent Details</label>
          <textarea
            id="rentDetails"
            name="rentDetails"
            value={formData.rentDetails}
            onChange={handleChange}
            placeholder="Enter rent details"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="photo"> Rent-Photo</label>
          <input
            type="file"
            id="photo"
            name="photo"
            onChange={handleFileChange}
            accept="image/*"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact">Contact</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter contact details"
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
      
    </div>
  );
};

export default New_Rent;
