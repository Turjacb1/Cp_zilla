import React from 'react';

const Police_station = () => {
    const policeData = [
        { designation: "পুলিশ সুপার, চাঁদপুর", phone: "৬৩৪৪৩, ৬৩১১৬", email: "spchandpur@police.gov.bd", mobile: "০১৩২০১১৫৯০০" },
        { designation: "অতিরিক্ত পুলিশ সুপার (প্রশাসন)", phone: "৬৩৪৪৩, ৬৩১১৬", email: "spchandpur@police.gov.bd", mobile: "০১৩২০১১৫৯০২" },
        { designation: "অতিরিক্ত পুলিশ সুপার (সদর)", phone: "৬৩৪৪৩, ৬৩১১৬", email: "spchandpur@police.gov.bd", mobile: "০১৩২০১১৫৯০৫" },
        { designation: "অতিরিক্ত পুলিশ সুপার (সদর সার্কেল)", phone: "", email: "", mobile: "০১৩২০১১৫৯৪৬" },
        { designation: "অতিরিক্ত পুলিশ সুপার (হাজীগঞ্জ সার্কেল)", phone: "", email: "", mobile: "০১৩২০১১৫৯৫১" },
        { designation: "সিনিয়র সহকারী পুলিশ সুপার (মতলব সার্কেল)", phone: "", email: "matlabcircel@gmail.com", mobile: "০১৩২০১১৫৯৬১" },
        { designation: "সহকারী পুলিশ সুপার (কচুয়া সার্কেল)", phone: "", email: "kacuacircle@gmail.com", mobile: "০১৩২০১১৫৯৫৬" },
        { designation: "ডিআইও-১", phone: "", email: "spdsbchandpur@gmail.com", mobile: "০১৩২০১১৫৯৬৬" },
        { designation: "ওসি (ডিবি)", phone: "", email: "dbchandpur@gmail.com", mobile: "০১৩২০১১৬১৭৯" },
        { designation: "আর আই, পুলিশ লাইন্স, চাঁদপুর", phone: "", email: "", mobile: "০১৩২০১১৬২২৪" },
        { designation: "কোর্ট ইন্সপেক্টর", phone: "", email: "", mobile: "০১৩২০১১৬১৯৪" },
        { designation: "ট্রাফিক ইন্সপেক্টর", phone: "", email: "", mobile: "০১৩২০১১৬২০৯" },
        { designation: "ওসি (চাঁদপুর সদর মডেল থানা)", phone: "", email: "oc.chandpurmodelps@gmail.com", mobile: "০১৩২০১১৫৯৮১" },
        { designation: "ওসি (হাইমচর থানা)", phone: "", email: "haimcharthana19@gmail.com", mobile: "০১৩২০১১৬১৫৩" },
        { designation: "ওসি (ফরিদগঞ্জ থানা)", phone: "", email: "oc.faridganjps@gmail.com", mobile: "০১৩২০১১৬১২৭" },
        { designation: "ওসি (মতলব দক্ষিন থানা)", phone: "", email: "oc.matlabsouthps@gmail.com", mobile: "০১৩২০১১৬০৪৯" },
        { designation: "ওসি (মতলব উত্তর থানা)", phone: "", email: "oc.matlabnorthps@gmail.com", mobile: "০১৩২০১১৬০২৩" },
        { designation: "ওসি (হাজীগঞ্জ থানা)", phone: "", email: "oc.hajiganjps@gmail.com", mobile: "০১৩২০১১৫৯৯৭" },
        { designation: "ওসি (কচুয়া থানা)", phone: "", email: "oc.kachuaps@gmail.com", mobile: "০১৩২০১১৬১০১" },
        { designation: "জেলা পুলিশ কন্ট্রোলরুম", phone: "", email: "", mobile: "০১৩২০১১৬৮৯৮" },
    ];

    return (
        <div>
            <h1>Police Station Information</h1>
            <table border="1" style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                <thead>
                    <tr>
                        <th>পদবি</th>
                        <th>ফোন</th>
                        <th>ইমেইল</th>
                        <th>মোবাইল</th>
                    </tr>
                </thead>
                <tbody>
                    {policeData.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.designation}</td>
                            <td>{entry.phone || "N/A"}</td>
                            <td>{entry.email || "N/A"}</td>
                            <td>{entry.mobile || "N/A"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Police_station;
