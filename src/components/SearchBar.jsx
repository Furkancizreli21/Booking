import React from "react";
import bed from "../assets/images/icons/bed.png";
import calendar from "../assets/images/icons/calendar.png";
import guests from "../assets/images/icons/cake.png";
function SearchBar() {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-6xl z-40">
      <div
        className="bg-white border-2 rounded-2xl shadow-lg flex flex-wrap items-end gap-4 w-full"
        style={{ padding: "24px" }}
      >
        <p className="w-full text-[#008EC4] text-3xl font-bold mb-4">
          Find your next stay
        </p>
        <div className="w-full flex items-center gap-4">
          <div className="flex flex-col flex-1 min-w-[200px]">
            <label className="text-sm text-gray-500 mb-1">
              Where are you going?
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

          <div className="flex flex-col flex-1 min-w-[150px]">
            <label className="text-sm text-gray-500 mb-1">Check In</label>
            <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 bg-white cursor-pointer">
              <img src={calendar} width={18} height={18} alt="calendar" />
              <span className="text-gray-800">Fri 12/2023</span>
            </div>
          </div>

          <div className="flex flex-col flex-1 min-w-[150px]">
            <label className="text-sm text-gray-500 mb-1">Check Out</label>
            <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 bg-white cursor-pointer">
              <img src={calendar} width={18} height={18} alt="calendar" />
              <span className="text-gray-800">Sun 16/2023</span>
            </div>
          </div>

          <div className="flex flex-col flex-1 min-w-[150px]">
            <label className="text-sm text-gray-500 mb-1">Rooms & Guests</label>
            <div className="flex items-center justify-between border border-gray-300 rounded-lg px-3 py-2 bg-white cursor-pointer">
              <div className="flex items-center gap-2">
                <img src={guests} width={18} height={18} alt="guests" />
                <span className="text-gray-800">1 room, 2 guests</span>
              </div>
              <span className="text-gray-400">▼</span>
            </div>
          </div>

          <div className="mt-6">
            <button
              className="bg-[#000957] text-white rounded-lg shadow-lg hover:bg-gray-800 transition"
              style={{ padding: "5px 10px", cursor: "pointer" }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
