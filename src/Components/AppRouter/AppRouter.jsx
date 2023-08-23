import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home';
import Land from '../Pages/H&D/Land/Land'
import City from '../Pages/H&D/City/City'
import Hotel from '../Pages/H&D/Hotel/Hotel'
import Rooms from '../Pages/Rooms/Rooms'
import Reservations from '../Pages/Reservations/Reservations'
import Login from '../Pages/Login/Login'
import NotFound from '../Pages/NotFound/NotFound';

const AppRouter = () => {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path="/hotels" element={<Land />}>
            <Route path=":slug" element={<City />} />
            <Route path=":id" element={<Hotel />} />
        </Route>
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/login" element={<Login />} />

        {/* NotFound */}
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter