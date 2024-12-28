import React from 'react';
import Footer from '../../Footer/Footer';

const Launch_schedule = () => {
    const schedules = [
        { id: '০১', name: 'এম ভি নিউ আল-বোরাক', time: '৬.০০ মিনিট', status: 'শীঘ্রই দেওয়া হবে' },
        { id: '০২', name: 'এম ভি দেশান্তর', time: '৬.৪৫ মিনিট', status: 'শীঘ্রই দেওয়া হবে' },
        { id: '০৩', name: 'এম ভি সোনার তরী', time: '৭.১৫ মিনিট', status: 'শীঘ্রই দেওয়া হবে' },
        { id: '০৪', name: 'এম ভি ঈগল-৭', time: '৮.০০ মিনিট', status: 'শীঘ্রই দেওয়া হবে' },
        { id: '০৫', name: 'ঈগল-৩', time: '৯.০০ মিনিট', status: 'শীঘ্রই দেওয়া হবে' },
        { id: '০৬', name: 'এম ভি রফ রফ', time: '৯.৩০ মিনিট', status: 'শীঘ্রই দেওয়া হবে' },
        { id: '০৭', name: 'এমভি-তুতুল  / তাকওয়া', time: '১০.০০মিনিট', status: 'শীঘ্রই দেওয়া হবে' },
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
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>লঞ্চ সময়সূচী</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
                <thead>
                    <tr style={{ backgroundColor: '#4caf50', color: 'white' }}>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>ক্রম</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>লঞ্চ নাম</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>সময়</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>অবস্থা</th>
                    </tr>
                </thead>
                <tbody>
                    {schedules.map((schedule) => (
                        <tr key={schedule.id} style={{ textAlign: 'center', borderBottom: '1px solid #ddd' }}>
                            <td style={{ padding: '10px' }}>{schedule.id}</td>
                            <td style={{ padding: '10px' }}>{schedule.name}</td>
                            <td style={{ padding: '10px' }}>{schedule.time}</td>
                            <td style={{ padding: '10px', color: '#ff5722' }}>{schedule.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Footer/>
        </div>
    );
};

export default Launch_schedule;
