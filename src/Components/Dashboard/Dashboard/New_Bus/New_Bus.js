import React, { useState } from 'react';
import './New_Bus.css';

const New_Bus = () => {
  const [formData, setFormData] = useState({
    busName: '',
    from: '',
    to: '',
    ticketPrice: '',
  });

  const [successMessage, setSuccessMessage] = useState(''); // New state for success message

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);

    try {
      const response = await fetch('<YOUR_FIREBASE_API_ENDPOINT>/api/bus', { // Replace with your Firebase API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data.message); // Check the success message

      // If successful, set the success message
      if (response.ok) {
        setSuccessMessage('Bus schedule submitted successfully!');
      }

      // Reset the form after successful submission
      setFormData({
        busName: '',
        from: '',
        to: '',
        ticketPrice: '',
      });
    } catch (err) {
      console.error('Error saving bus data:', err);
      setSuccessMessage('Error submitting bus data. Please try again.'); // Error message
    }
  };

  return (
    <div className="new-bus-container">
      <h2 className="form-title">Add New Bus Schedule</h2>
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
            placeholder="Enter Departure Location"
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

      {/* Conditionally display the success message */}
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default New_Bus;
