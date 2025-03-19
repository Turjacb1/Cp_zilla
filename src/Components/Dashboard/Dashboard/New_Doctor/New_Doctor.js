// import React, { useState } from 'react';
// import './New_Doctor.css';

// const New_Doctor = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         phone: '',
//         address: '',
//         doctorType: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Form Submitted:', formData);
//         // You can add logic to send this data to your backend
//     };

//     return (
//         <div className="container">
//             <h2>Add New Doctor</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="name">Name:</label>
//                     <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor="phone">Phone Number:</label>
//                     <input
//                         type="tel"
//                         id="phone"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor="address">Address:</label>
//                     <textarea
//                         id="address"
//                         name="address"
//                         value={formData.address}
//                         onChange={handleChange}
//                         required
//                     ></textarea>
//                 </div>

//                 <div>
//                     <label htmlFor="doctorType">Doctor Type:</label>
//                     <select
//                         id="doctorType"
//                         name="doctorType"
//                         value={formData.doctorType}
//                         onChange={handleChange}
//                         required
//                     >
//                         <option value="">Select Doctor Type</option>
//                         <option value="Cardiologist">হার্ট রোগ বিশেষজ্ঞ</option>
//                         <option value="Immunologist">Immunologist (এলার্জি বিশেষজ্ঞ)</option>
//                         <option value="Neurologist">Neurologist - স্নায়ুরোগ বিশেষজ্ঞ</option>
//                         <option value="ENT Specialist">ENT Specialist (Otolaryngologist) - কানের, নাকের ও গলার ডাক্তার</option>
//                         <option value="Dentist">Dentist - দন্ত চিকিৎসক</option>
//                     </select>
//                 </div>

//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default New_Doctor;




import React, { useState } from 'react';
import './New_Doctor.css';

const New_Doctor = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        doctorType: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Send data to the backend using fetch
        try {
            const response = await fetch('https://cp-zilla.onrender.com/api/doctors', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Doctor added successfully:', data);
                // Optionally, clear the form or update UI after successful submission
            } else {
                console.error('Error adding doctor:', data);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container">
            <h2 >Add New Doctor</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="address">Address:</label>
                    <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <div>
                    <label htmlFor="doctorType">Doctor Type:</label>
                    <select
                        id="doctorType"
                        name="doctorType"
                        value={formData.doctorType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Doctor Type</option>
                        <option value="Cardiologist">হার্ট রোগ বিশেষজ্ঞ</option>
                        <option value="Immunologist">Immunologist (এলার্জি বিশেষজ্ঞ)</option>
                        <option value="Neurologist">Neurologist - স্নায়ুরোগ বিশেষজ্ঞ</option>
                        <option value="ENT Specialist">ENT Specialist (Otolaryngologist) - কানের, নাকের ও গলার ডাক্তার</option>
                        <option value="Dentist">Dentist - দন্ত চিকিৎসক</option>
                    </select>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default New_Doctor;
