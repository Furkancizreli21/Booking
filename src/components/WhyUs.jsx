import React from "react";
import savemoney from "../assets/images/icons/save-money.png";
import security from "../assets/images/icons/cyber-security.png";
import seamless from "../assets/images/icons/circle.png";
function WhyUs() {
  return (
    <div className="flex flex-col items-center  justify-center mt-[150px] max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10">WHY CHOOSE US?</h1>
      <div className="flex gap-10">
        <div className="flex flex-col items-center justify-center">
          <img
            src={savemoney}
            width={50}
            height={50}
            style={{
              backgroundColor: "#63C8FF",
              padding: "7px",
              borderRadius: "10px",
            }}
          />
          <b className="mb-3">Competitive Prices</b>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            voluptatem, odit praesentium at soluta reiciendis.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={security}
            width={50}
            height={50}
            style={{
              backgroundColor: "#63C8FF",
              padding: "7px",
              borderRadius: "10px",
            }}
          />
          <b className="mb-3">Secure Booking</b>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            voluptatem, odit praesentium at soluta reiciendis.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={seamless}
            width={50}
            height={50}
            style={{
              backgroundColor: "#63C8FF",
              padding: "7px",
              borderRadius: "10px",
            }}
          />
          <b className="mb-3">Seamless Expperience</b>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            voluptatem, odit praesentium at soluta reiciendis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
