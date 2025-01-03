import React from 'react';
import './Restaurant.css';

const restaurantData = [
  {
    name: "Red Chilli Chinese Restaurant",
    rating: "4.0(1.4K)",
    priceRange: "৳200–400",
    Address: "6MG5+QWF, অনন্যা মার্কেট (৩য় তলা), ছায়াবানীর মোড়",
    hours: "Closed ⋅ Opens 11 AM",
    services: "Dine-in · Drive-through · No-contact delivery",
  },
  {
    name: "রসুইঘর রেষ্টুরেন্ট এন্ড পার্টি সেন্টার",
    rating: "4.6(983)",
    priceRange: "৳200–400",
    Address: "Haji Mohsin Rd",
    hours: "Closed ⋅ Opens 10 AM",
    services: "Dine-in · Drive-through · No-contact delivery",
  },
  {
    name: "আবরার - রেষ্টুরেন্ট এন্ড কাবাব হাউজ",
    rating: "3.9(248)",
    priceRange: "৳200–400",
    Address: "6MM7+5Q4, Stadium Rd",
    services: "Dine-in · Drive-through · Delivery",
  },
  {
    name: "La চাঁদপুইরা",
    rating: "4.5(22)",
    priceRange: "Restaurant",
    Address: "Road",
    hours: "Closed ⋅ Opens 10 AM",
    services: "Dine-in · Takeaway · No-contact delivery",
  },
  {
    name: "Grand City",
    rating: "3.9(375)",
    priceRange: "৳200–400",
    Address: "6MG4+GQW, Shahid Muktijoddha Rd",
    hours: "Closed ⋅ Opens 11 AM",
    services: "Dine-in · Drive-through · No-contact delivery",
  },
  {
    name: "Aroma Restaurant and Cafe",
    rating: "3.8(319)",
    priceRange: "Restaurant",
    Address: "6MG5+J57, Shahid Muktijoddha Rd",
    hours: "Closed ⋅ Opens 10:30 AM",
    services: "Dine-in · Drive-through · No-contact delivery",
  },
  {
    name: "Taj hotel & restaurant",
    rating: "3.8(664)",
    priceRange: "৳1–400",
    Address: "3600",
    hours: "Closed ⋅ Opens 7 AM",
    services: "Dine-in · Drive-through · No-contact delivery",
  },
  {
    name: "Queen's Cafe",
    rating: "3.5(78)",
    priceRange: "৳200–400",
    Address: "6MH5+9PV, Haji Mohsin Rd",
    services: "Dine-in · Drive-through · Delivery",
  },
  // Add more restaurants as needed
];

const Restaurant = () => {
  return (
    <div className="restaurant-container">
      <h1 className="heading">Restaurants in Chandpur</h1>
      <div className="restaurant-grid">
        {restaurantData.map((restaurant, index) => (
          <div className="restaurant-card" key={index}>
            <h3 className="restaurant-name"> Name :{restaurant.name}</h3>
            <p className="restaurant-price-range">Price Range :{restaurant.priceRange}</p>
            <p className="restaurant-Address">Address :{restaurant.Address}</p>
            <p className="restaurant-hours">{restaurant.hours}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
