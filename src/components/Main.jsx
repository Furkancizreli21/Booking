import React from "react";
import bed from "../assets/images/icons/bed.png";
import calendar from "../assets/images/icons/calendar.png";
import guests from "../assets/images/icons/cake.png";

function Main() {
  return (
    <div className="bg-blue-50 p-10">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 flex flex-wrap items-end gap-4">
        <p className="w-full text-gray-900 text-xl font-semibold mb-2">
          Where are you Stay?
        </p>

        <div className="flex flex-col w-56">
          <label className="text-sm text-gray-500 mb-1">
            Enter Destination
          </label>
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 bg-white">
            <img src={bed} width={18} height={18} alt="bed" />
            <input
              type="text"
              placeholder="Jaipur, Rajasthan"
              className="outline-none bg-transparent text-gray-800 w-full placeholder-gray-400"
            />
          </div>
        </div>

        <div className="flex flex-col w-40">
          <label className="text-sm text-gray-500 mb-1">Check In</label>
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 bg-white cursor-pointer">
            <img src={calendar} width={18} height={18} alt="calendar" />
            <span className="text-gray-800">Fri 12/2023</span>
          </div>
        </div>

        <div className="flex flex-col w-40">
          <label className="text-sm text-gray-500 mb-1">Check Out</label>
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 bg-white cursor-pointer">
            <img src={calendar} width={18} height={18} alt="calendar" />
            <span className="text-gray-800">Sun 16/2023</span>
          </div>
        </div>

        <div className="flex flex-col w-44">
          <label className="text-sm text-gray-500 mb-1">Rooms & Guests</label>
          <div className="flex items-center justify-between border border-gray-300 rounded-lg px-3 py-2 bg-white cursor-pointer">
            <div className="flex items-center gap-2">
              <img src={guests} width={18} height={18} alt="guests" />
              <span className="text-gray-800">1 room, 2 guests</span>
            </div>
            <span className="text-gray-400">▼</span>
          </div>
        </div>

        <div className="flex flex-col mt-1">
          <button className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition">
            Show Result
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
