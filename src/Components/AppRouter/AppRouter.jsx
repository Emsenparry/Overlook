import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import { Land } from "../Pages/H&D/Land/Land";
import Rooms from "../Pages/Rooms/Rooms";
import Reservations from "../Pages/Reservations/Reservations";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import { HotelList, HotelDetails } from "../Partials/LandNav/LandNav";

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/destinations">
        <Route index element={<Land />} />
        <Route path=":slug">
          <Route index element={<HotelList />} />
          <Route path=":city_id" element={<HotelDetails />} />
        </Route>
      </Route>

      <Route path="/rooms" element={<Rooms />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/login" element={<Login />} />

      {/* NotFound */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
