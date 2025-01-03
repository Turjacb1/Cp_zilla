import React from "react";
import {
  FaStethoscope,
  FaHospital,
  FaBus,
  FaTrain,
  FaLandmark,
  FaHome,
  FaFireExtinguisher,
  FaShippingFast,
  FaShieldAlt,
  FaBolt,
  FaTint,
  FaHotel,
  FaCar,
} from "react-icons/fa"; // Import icons
import { Link } from "react-router-dom"; // Use Link for navigation
import "./GridMenu.css";
import Footer from "../Footer/Footer";

const menuItems = [
  { title: "ডাক্তার", icon: <FaStethoscope />, path: "/doctor" },
  { title: "হাসপাতাল", icon: <FaHospital />, path: "/hospital" },
  { title: "বাসের সময়সূচি", icon: <FaBus />, path: "/bus-schedule" },
  { title: "ট্রেনের সময়সূচি", icon: <FaTrain />, path: "/train-schedule" },
  { title: "লঞ্চ সময়সূচী", icon: <FaCar />, path: "/launch-schedule" },
  { title: "দর্শনীয় স্থান", icon: <FaLandmark />, path: "/landmarks" },
  { title: "বাসা ভাড়া", icon: <FaHome />, path: "/rent-house" },
  { title: "ফায়ার সার্ভিস", icon: <FaFireExtinguisher />, path: "/fire-service" },
  { title: "কুরিয়ার সার্ভিস", icon: <FaShippingFast />, path: "/courier-service" },
  { title: "থানা", icon: <FaShieldAlt />, path: "/police-station" },
  { title: "বিদ্যুৎ অফিস", icon: <FaBolt />, path: "/electric-office" },
  { title: "রক্ত", icon: <FaTint />, path: "/blood-donation" },
  { title: "হোটেল", icon: <FaHotel />, path: "/hotels" },
  { title: "রেষ্টুরেন্ট", icon: <FaHotel />, path: "/restaurant" },
];

const GridMenu = () => {
  return (
    <div className="grid-menu">
      {menuItems.map((item, index) => (
        <Link to={item.path} key={index} className="menu-item">
          <div className="icon">{item.icon}</div>
          <div className="title">{item.title}</div>
        </Link>
      ))}
      
    </div>
  );
};

export default GridMenu;
