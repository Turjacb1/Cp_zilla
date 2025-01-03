import React, { useState } from 'react';
import './New_Hospital.css';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import Footer from '../../../Footer/Footer';

const firebaseConfig = {
  apiKey: "<YOUR_API_KEY>",
  authDomain: "<YOUR_AUTH_DOMAIN>",
  projectId: "<YOUR_PROJECT_ID>",
  storageBucket: "<YOUR_STORAGE_BUCKET>",
  messagingSenderId: "<YOUR_MESSAGING_SENDER_ID>",
  appId: "<YOUR_APP_ID>",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const New_Hospital = () => {
  const [formData, setFormData] = useState({
    hospitalName: '',
    address: '',
    hours: '',
    phone: '',
    website: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'hospitals'), formData);
      console.log('Document written with ID: ', docRef.id);
      setSuccessMessage('Hospital added successfully!');
      setFormData({
        hospitalName: '',
        address: '',
        hours: '',
        phone: '',
        website: '',
      });
    } catch (err) {
      console.error('Error adding document: ', err);
      setErrorMessage('Error adding hospital. Please try again.');
    }
  };

  return (
    <div className="new-hospital-container">
      <h2 className="form-title" style={{color:"blue"}}>Add New Hospital</h2>
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

      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      
    </div>
  );
};

export default New_Hospital;
