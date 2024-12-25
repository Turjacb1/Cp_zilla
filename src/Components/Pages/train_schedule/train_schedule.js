import React from 'react';
import '../bus_schedule/bus_schedule.css'

const train_schedule = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h2>Train Schedule</h2>
            
            <h3>Intercity Train From Chandpur:</h3>
            <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', textAlign: 'left' }}>
                <thead>
                    <tr>
                        <th>Train No</th>
                        <th>Name</th>
                        <th>Off Day</th>
                        <th>From</th>
                        <th>Departure</th>
                        <th>To</th>
                        <th>Arrival</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>730</td>
                        <td>Meghna Express</td>
                        <td>No</td>
                        <td>Chandpur</td>
                        <td>05:00</td>
                        <td>Chittagong</td>
                        <td>10:00</td>
                    </tr>
                </tbody>
            </table>
            
            <h3>Mail/Express Trains From Chandpur:</h3>
            <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', textAlign: 'left' }}>
                <thead>
                    <tr>
                        <th>Train No</th>
                        <th>Name</th>
                        <th>Off Day</th>
                        <th>From</th>
                        <th>Departure</th>
                        <th>To</th>
                        <th>Arrival</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>30</td>
                        <td>Sagarika Express</td>
                        <td>No</td>
                        <td>Chandpur</td>
                        <td>13:50</td>
                        <td>Chittagong</td>
                        <td>19:35</td>
                    </tr>
                    <tr>
                        <td>81</td>
                        <td>Chandpur Commuter</td>
                        <td>Friday</td>
                        <td>Chandpur</td>
                        <td>09:30</td>
                        <td>Comilla</td>
                        <td>12:35</td>
                    </tr>
                    <tr>
                        <td>83</td>
                        <td>Chandpur Commuter</td>
                        <td>Friday</td>
                        <td>Chandpur</td>
                        <td>16:30</td>
                        <td>Comilla</td>
                        <td>19:40</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default train_schedule;
