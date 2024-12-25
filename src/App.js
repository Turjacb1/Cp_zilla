import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Carousel from "./Components/Carousel/Carousel";
import GridMenu from "./Components/GridMenu/GridMenu";
import Doctor from "./Components/Pages/doctor/doctor";
import Hospital from "./Components/Pages/hospital/hospital";
import Cardiology from "./Components/Pages/doctor/Cardiology/Cardiology";
import Neurologist from "./Components/Pages/doctor/Neurologist/Neurologist";
import Bus_Schedule from "./Components/Pages/bus_schedule/bus_schedule";
import Train_schedule from "./Components/Pages/train_schedule/train_schedule";
import Landmarks from "./Components/Pages/landmarks/landmarks";
import Fireservice from "./Components/Pages/fire_service/fire_service";
import Courier_service from "./Components/Pages/Courier_service/Courier_service";
import Hotels from "./Components/Pages/Hotels/Hotels";
import Police_station from "./Components/Pages/Police_station/Police_station";
import Launch_schedule from "./Components/Pages/Launch_schedule/Launch_schedule";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import New_Bus from "./Components/Dashboard/Dashboard/New_Bus/New_Bus";
import New_Hospital from "./Components/Dashboard/Dashboard/New_Hospital/New_Hospital";
import New_Spot from "./Components/Dashboard/Dashboard/New_Spot/New_Spot";
import New_Rent from "./Components/Dashboard/Dashboard/New_Rent/New_Rent";

function App() {
  return (
    <Router>
      <Header />
      <Carousel />
      <Routes>
        <Route path="/" element={<GridMenu />} />
        <Route path="/doctor" element={<Doctor/>} />
        <Route path="/cardiology" element={<Cardiology />} />
        <Route path="/neurologist" element={<Neurologist />} />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/bus-schedule" element={<Bus_Schedule/>}/>
        <Route path="/train-schedule" element={<Train_schedule/>}/>
        <Route path="/landmarks" element={<Landmarks/>}/>
        <Route path="/fire-service" element={<Fireservice/>}/>
        <Route path="/courier-service" element={<Courier_service/>}/>
        <Route path="/hotels" element={<Hotels/>}/>
        <Route path="/police-station" element={<Police_station/>}/>
        <Route path="/Launch-Schedule" element={<Launch_schedule/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/add-bus-schedule" element={<New_Bus/>}/>
        <Route path="/add-hospital" element={<New_Hospital/>}/>
        <Route path="/add-tourist-spot" element={<New_Spot/>}/>
        <Route path="/add-house-rent" element={<New_Rent/>}/>

        

        {/* Add more department routes here */}
      </Routes>
    </Router>
  );
}

export default App;
