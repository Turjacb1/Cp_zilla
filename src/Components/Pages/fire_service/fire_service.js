import React from 'react';

const FireService = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h2>Fire Service Contact Information</h2>
            <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                    <tr style={{ backgroundColor: '#f2f2f2' }}>
                        <th>ক্রমসংখ্যা</th>
                        <th>নাম</th>
                        <th>পুরাতন ফোন নম্বর</th>
                        <th>নতুন ফোন নম্বর</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>01</td>
                        <td>উপ-সহকারী পরিচালক, চাঁদপুর</td>
                        <td>0841-63630</td>
                        <td>02334463630</td>
                    </tr>
                    <tr>
                        <td>02</td>
                        <td>চাঁদপুর উত্তর ফায়ার স্টেশন</td>
                        <td>0841-63030</td>
                        <td>02334463030</td>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>চাঁদপুর দক্ষিণ ফায়ার স্টেশন</td>
                        <td>0841-63011</td>
                        <td>02334463011</td>
                    </tr>
                    <tr>
                        <td>04</td>
                        <td>চাঁদপুর নদী ফায়ার স্টেশন</td>
                        <td>0841-63035</td>
                        <td>02334463035</td>
                    </tr>
                    <tr>
                        <td>05</td>
                        <td>হাজীগঞ্জ ফায়ার স্টেশন</td>
                        <td>0848-75030</td>
                        <td>02334475030</td>
                    </tr>
                    <tr>
                        <td>06</td>
                        <td>কচুয়া ফায়ার স্টেশন</td>
                        <td>0848-65066</td>
                        <td>02334465066</td>
                    </tr>
                    <tr>
                        <td>07</td>
                        <td>শাহরাস্তি ফায়ার স্টেশন</td>
                        <td>0848-65222</td>
                        <td>02334465222</td>
                    </tr>
                    <tr>
                        <td>08</td>
                        <td>হাইমচর ফায়ার স্টেশন</td>
                        <td>0842-62111</td>
                        <td>02334462111</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default FireService;
