import React from "react";
import heroComputer from "../assets/heroComputer.jpg";
import Title from "../components/text/Title";
import Subtitle from "../components/text/Subtitle";
import Text from "../components/text/Text";

const Hero = () => {
  return (
    <section className="mb-10 grid grid-cols-2 gap-y-10 max-xl:grid-cols-1 w-2/3">
      <div className="flex flex-col justify-center">
        <Subtitle>WOMEN IN TECHNOLOGY CONFERENCE</Subtitle>
        <div className="flex space-x-4">
          <Text>GRAHAM CENTER</Text>
          <Text>03/28/2025</Text>
          <Text>9AM-7PM</Text>
        </div>
        <Title>
          WiTCON <br></br>2025
        </Title>
        <a href="https://lu.ma/hwyplw5v">
        <button className="bg-pink-500 hover:bg-pink-700 active:bg-pink-400 text-white font-[Pixelify_Sans] py-2 px-4 rounded max-w-50 mt-4">
          Register now!
        </button>
        </a>
      </div>
      <div>
        <img
          className="relative object-cover rounded-4xl"
          src={heroComputer}
          alt="Computer in the foreground of a crowd with the words Welcome to WiTCON"
        />
      </div>
    </section>
  );
};

export default Hero;
