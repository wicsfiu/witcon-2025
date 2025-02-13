import React from "react";
import Hero from "../sections/Hero";
import Subtitle from "../components/text/Subtitle";
import wicsLogo from "../assets/wicsLogo.svg";

const Homepage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Subtitle>More coming soon!</Subtitle>
        <img className="max-w-50 max-h-50 my-10" src={wicsLogo} />
      </div>
    </>
  );
};

export default Homepage;
