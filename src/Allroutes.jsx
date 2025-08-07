import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Productpage from "./pages/Productpage";
import Contactpage from "./pages/Contactpage";
import Servicepage from "./pages/Servicepage";
import Aboutpage from "./pages/Aboutpage";
import Descriptionpage from "./pages/descriptionpage";
import Cartpage from "./pages/Cartpage";

function Allroutes() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/product" element={<Productpage />} />
            <Route path="/description/:id" element={<Descriptionpage />} />
            <Route path="/contact" element={<Contactpage />} />
            <Route path="/services" element={<Servicepage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/cartpage" element={<Cartpage />} />
        </Routes>
    );
}

export default Allroutes;
