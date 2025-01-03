import React from 'react';
import Footer from '../../Footer/Footer';
import './Launch_schedule.css'; // Import the CSS file

const Launch_schedule = () => {
    const schedules = [
        { id: '০১', name: 'এম ভি নিউ আল-বোরাক', time: '৬.০০ মিনিট', status: 'শীঘ্রই দেওয়া হবে' },
        { id: '০২', name: 'এম ভি দেশান্তর', time: '৬.৪৫ মিনিট', status: 'শীঘ্রই দেওয়া হবে' },
        { id: '০৩', name: 'এম ভি সোনার তরী', time: '৭.১৫ মিনিট', status: 'শীঘ্রই দেওয়া হবে' },
        { id: '০৪', name: 'এম ভি ঈগল-৭', time: '৮.০০ মিনিট', status: 'শীঘ্রই দেওয়া হবে' },
        { id: '০৫', name: 'ঈগল-৩', time: '৯.০০ মিনিট', status: 'শীঘ্রই দেওয়া হবে' },
        { id: '০৬', name: 'এম ভি রফ রফ', time: '৯.৩০ মিনিট', status: 'শীঘ্রই দেওয়া হবে' },
        { id: '০৭', name: 'এমভি-তুতুল / তাকওয়া', time: '১০.০০মিনিট', status: 'শীঘ্রই দেওয়া হবে' },
        { id: '০৮', name: 'এম ভি বোগদাদীয়া ৮/৯', time: '১০.৪০ মিনিট', status: 'শীঘ্রই দেওয়া হবে' },
        { id: '০৯', name: 'এম ভি রাসেল ৩', time: '১১.০৫ মিনিট', status: 'শীঘ্রই দেওয়া হবে' },
        { id: '১০', name: 'এম ভি রফরফ ২', time: '১২.০০ মিনিট', status: 'শীঘ্রই দেওয়া হবে' },
        { id: '১১', name: 'আব-এ-জমজম', time: '১.০০ মিনিট', status: 'শীঘ্রই দেওয়া হবে' },
        { id: '১২', name: 'এম ভি মেঘনা রাণী', time: '২.০০ মিনিট', status: 'শীঘ্রই দেওয়া হবে' },
        { id: '১৩', name: 'এম ভি সোনার তরী-২', time: '২.৪০ মিনিট', status: 'শীঘ্রই দেওয়া হবে' },
        { id: '১৪', name: 'এম ভি সোনার তরী-১', time: '৩.৪০ মিনিট', status: 'শীঘ্রই দেওয়া হবে' },
        { id: '১৫', name: 'বোগদাদিয়া-৭', time: '৫.০০ মিনিট', status: 'শীঘ্রই দেওয়া হবে' },
        { id: '১৬', name: 'ইমাম হাসান-০/৫', time: '৬.০০ মিনিট', status: 'শীঘ্রই দেওয়া হবে' },
        { id: '১৭', name: 'এমভি-ইমাম হাসান-০/৫', time: '৭.০০মিনিট', status: 'শীঘ্রই দেওয়া হবে' },
        { id: '১৮', name: 'এম ভি মিতালী-৪', time: '৯.৪০ মিনিট', status: 'শীঘ্রই দেওয়া হবে' },
        { id: '১৯', name: 'এম ভি ইমাম হাসান-২', time: '১১.১০ মিনিট', status: 'শীঘ্রই দেওয়া হবে' },
        { id: '২০', name: 'এম ভি জমজম-১/তাক্ওয়া', time: '১১.২০ মিনিট', status: 'শীঘ্রই দেওয়া হবে' },
        { id: '২১', name: 'এম ভি ময়ুর-৭', time: '১২.১৫ মিনিট', status: 'শীঘ্রই দেওয়া হবে' },
        { id: '২২', name: 'এম ভি ময়ুর-২', time: '১২.৪৫মিনিট', status: 'শীঘ্রই দেওয়া হবে' },
    ];

    return (
        <div>
            <h2>লঞ্চ সময়সূচী- Chandpur to Dhaka</h2>
            <table>
                <thead>
                    <tr>
                        <th>ক্রম</th>
                        <th>লঞ্চ নাম</th>
                        <th>সময়</th>
                        <th>অবস্থা</th>
                    </tr>
                </thead>
                <tbody>
                    {schedules.map((schedule) => (
                        <tr key={schedule.id}>
                            <td>{schedule.id}</td>
                            <td>{schedule.name}</td>
                            <td>{schedule.time}</td>
                            <td>{schedule.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
    );
};

export default Launch_schedule;
