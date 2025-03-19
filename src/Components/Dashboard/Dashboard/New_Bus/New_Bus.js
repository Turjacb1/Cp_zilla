import React, { useState } from 'react';
import './New_Bus.css';

const New_Bus = () => {
  const [formData, setFormData] = useState({
    busName: '',
    from: '',
    to: '',
    ticketPrice: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://cp-zilla.onrender.com/api/bus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit bus data.');
      }

      const data = await response.json();
      setSuccessMessage(data.message || 'Bus schedule submitted successfully!');
      setErrorMessage('');
      
      // Reset form data
      setFormData({
        busName: '',
        from: '',
        to: '',
        ticketPrice: '',
      });
    } catch (err) {
      setErrorMessage(err.message || 'Error submitting bus data.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="new-bus-container">
      <h2 className="form-title" style={{color:"blue"}}>Add New Bus Schedule</h2>
      <form onSubmit={handleSubmit} className="new-bus-form">
        <div className="form-group">
          <label htmlFor="busName">Bus Name</label>
          <input
            type="text"
            id="busName"
            name="busName"
            value={formData.busName}
            onChange={handleChange}
            placeholder="Enter Bus Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="from">From</label>
          <input
            type="text"
            id="from"
            name="from"
            value={formData.from}
            onChange={handleChange}
            placeholder="Enter Departure Address"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="to">To</label>
          <input
            type="text"
            id="to"
            name="to"
            value={formData.to}
            onChange={handleChange}
            placeholder="Enter Destination"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ticketPrice">Ticket Price</label>
          <input
            type="number"
            id="ticketPrice"
            name="ticketPrice"
            value={formData.ticketPrice}
            onChange={handleChange}
            placeholder="Enter Ticket Price"
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default New_Bus;
