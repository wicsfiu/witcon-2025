import { Routes, Route } from "react-router-dom";
import Team from "../sections/Team";
import Home from "../pages/Home";
import Navbar from "./Navbar";

const Navigation = () => {
  return (
    <>
    <Navbar />
    <div>
    <Routes>
        <Route path="/witcon-2025/" element={<Home />} />
        <Route path="" element={<Home />} />
        <Route path="/team" element={<Team />} />
    </Routes>
    </div>
     
    </>
   
  );
};

export default Navigation;