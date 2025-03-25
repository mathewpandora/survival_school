// pages/Block4.jsx
import React, { useEffect } from "react";
import ReviewsHeader from "../componetns/block4/ReviewsHeader";
import ReviewsCarousel from "../componetns/block4/ReviewsCarousel";
import "../App.css";

const Block4 = ({ block4Data }) => {
  useEffect(() => {}, []);
  return (
    <div
      className="w-full h-auto md:h-screen bg-cover bg-center relative flex flex-col"
      style={{ backgroundImage: `url(/${block4Data.backgroundImage})` }}
    >
      <p
        className="text-[140px] md:text-[180px] top-[10%] md:top-[4%]"
        style={{
          fontFamily: "Mr Lonely",
          // fontSize: "180px",
          color: "#938065",
          position: "absolute",
          // top: "4%",
          right: "2%",
          transform: "rotate(15deg)",
          zIndex: 2
        }}
      >
        2024
      </p>
      <ReviewsHeader headerText={block4Data.headerText} />
      <ReviewsCarousel />
    </div>
  );
};

export default Block4;
