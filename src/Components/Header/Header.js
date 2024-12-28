import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    // Redirect based on the search query
    const query = searchQuery.toLowerCase();

    if (query === "doctor") {
      navigate("/doctor"); // Navigate to the Doctor component
    } else if (query === "bus") {
      navigate("/bus-schedule"); // Navigate to the BusSchedule component
    } else if (query === "courier") {
      navigate("/courier-service"); // Navigate to the CourierService component
    } else if (query === "fire") {
      navigate("/fire-service"); // Navigate to the FireService component
    } else if (query === "hospital") {
      navigate("/hospital"); // Navigate to the Hospital component
    } else if (query === "hotel") {
      navigate("/hotels"); // Navigate to the Hotels component
    } else if (query === "travel") {
      navigate("/landmarks"); // Navigate to the Landmarks component
    } else {
      console.log("Search Query:", searchQuery);
      // Handle other search scenarios here (e.g., show a message or perform a broader search)
    }

    // Clear the search bar after submission
    setSearchQuery("");
  };

  return (
    <header className="header">
      <h1 className="header-title">Chandpur City</h1>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
          </li>
        </ul>
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </nav>
    </header>
  );
};

export default Header;
