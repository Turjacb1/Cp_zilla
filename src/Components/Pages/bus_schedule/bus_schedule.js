import React, { useState, useEffect } from 'react';
import './bus_schedule.css'; // Import the CSS file
import Footer from '../../Footer/Footer';

const BusSchedule = () => {
  const [buses, setBuses] = useState([]);  // State to hold the bus data
  const [loading, setLoading] = useState(true);  // State to track loading status
  const [error, setError] = useState('');  // State for error handling

  // Static bus data to display as fallback
  const staticBuses = [
    { busName: 'বোগদাদ', from: 'Chandpur', to: 'Cumilla', ticketPrice: '100' },
    { busName: 'Aidi', from: 'Chandpur', to: 'Jogotpur', ticketPrice: '' },
    { busName: '𝐉𝐚𝐢𝐧𝐩𝐮𝐫 𝐏𝐚𝐫𝐢𝐛𝐚𝐡𝐚𝐧', from: 'বাবুরহাট', to: 'ঢাকা', ticketPrice: '200' },
    { busName: 'সততা', from: 'চাঁদপুর', to: 'সিলেট - ছাতক - শ্রীমঙ্গল', ticketPrice: '' },
    { busName: 'আনন্দ পরিবহন', from: 'চাঁদপুর সদর', to: ' নোয়াখালী', ticketPrice: '' },
    { busName: 'Al-Arafha', from: 'Hajigonj', to: 'Dhaka', ticketPrice: '300' },
    { busName: 'Surama', from: 'Hajigonj', to: 'Dhaka', ticketPrice: '250' },
    { busName: 'BRTC', from: 'Hajigonj', to: 'Dhaka', ticketPrice: '350' },
    { busName: 'Matlab-Express', from: 'বাবুরহাট', to: 'Dhaka', ticketPrice: '200' }
  ];

  // Fetch bus data from the server when the component mounts
  useEffect(() => {
    const fetchBuses = async () => {
      try {
        const response = await fetch('https://cp-zilla-p1qjp0i8v-turjacb1s-projects.vercel.app/api/bus');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Response is not JSON');
        }
        const data = await response.json();
        setBuses(data);  // Update state with the fetched bus data
        setLoading(false);  // Set loading to false after data is fetched
      } catch (err) {
        console.error('Fetch error:', err);  // Log error for debugging
        setError(err.message);  // Store error for debugging
        setBuses(staticBuses); // Use static data if the fetch fails
        setLoading(false);
      }
    };

    fetchBuses();  // Call the fetch function when the component mounts
  }, []);

  return (
    <div className="container">
      <h2>Bus Schedule</h2>
      {loading && <p>Loading bus schedule...</p>}
      {error && <p>Unable to load data, showing static schedule.</p>}
      {!loading && (
        <table>
          <thead>
            <tr>
              <th>Bus Name</th>
              <th>From</th>
              <th>To</th>
              <th>Ticket Price</th>
            </tr>
          </thead>
          <tbody>
            {buses.map((bus, index) => (
              <tr key={`${bus.busName}-${index}`}> {/* Unique key using busName and index */}
                <td>{bus.busName}</td>
                <td>{bus.from}</td>
                <td>{bus.to}</td>
                <td>{bus.ticketPrice || 'N/A'}</td> {/* Handle empty ticketPrice */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Footer />
    </div>
  );
};

export default BusSchedule;