import React, { useEffect, useState } from "react";
import bed from "../assets/images/icons/bed.png";
import calendar from "../assets/images/icons/calendar.png";
import guests from "../assets/images/icons/cake.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "@tailwindplus/elements";

function SearchBar() {
  const [countryNames, setCountryNames] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [selected, setSelected] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(1);
  const [roomCount, setRoomCount] = useState(1);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name")
      .then((r) => r.json())
      .then((data) => {
        setCountryNames(data);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchName(e.target.value);
  };

  const filteredCountries = countryNames.filter((city) =>
    city.name.common.toLowerCase().includes(searchName.toLowerCase())
  );

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
          {/* Search input */}
          <div className="flex flex-col flex-1 relative">
            <label className="text-sm text-gray-500 mb-1">
              Where are you going?
            </label>

            <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 bg-white">
              <img src={bed} width={18} height={18} alt="bed" />
              <input
                type="text"
                value={searchName}
                placeholder="Jaipur, Rajasthan"
                className="outline-none bg-transparent text-gray-800 w-full placeholder-gray-400"
                onChange={handleSearch}
              />
            </div>

            {searchName && !selected && (
              <ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg mt-1 max-h-40 overflow-y-auto z-50">
                {filteredCountries.length > 0 ? (
                  filteredCountries.map((city, i) => (
                    <li
                      key={i}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSearchName(city.name.common);
                        setSelected(true);
                      }}
                    >
                      {city.name.common}
                    </li>
                  ))
                ) : (
                  <li className="px-3 py-2 text-gray-500">No results</li>
                )}
              </ul>
            )}
          </div>

          {/* Check In */}
          <div className="flex flex-col flex-1 min-w-[150px]">
            <label className="text-sm text-gray-500 mb-1">Check In</label>
            <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 bg-white cursor-pointer">
              <img src={calendar} width={18} height={18} alt="calendar" />
              <DatePicker
                onChange={(dates) => {
                  const [start, end] = dates;
                  setStartDate(start);
                  setEndDate(end);
                }}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                placeholderText="Select dates"
                className="outline-none bg-transparent text-gray-800 w-full placeholder-gray-400"
              />
            </div>
          </div>

          {/* Guests */}
          <div className="flex flex-col flex-1 min-w-[150px] relative">
            <label className="text-sm text-gray-500 mb-1">Rooms & Guests</label>
            <button
              onClick={() => setGuestsOpen(!guestsOpen)}
              className="inline-flex w-full justify-between px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 hover:border-blue-400 hover:shadow-sm transition"
            >
              {roomCount} room, {adultCount + childCount} guests
              <span className="ml-2 text-gray-500">▼</span>
            </button>

            {guestsOpen && (
              <div className="absolute top-full left-0 w-full bg-white rounded-xl mt-2 z-50 p-4 shadow-lg border border-gray-200 space-y-3 animate-fadeIn">
                {/* Adults */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Adults</span>
                  <div className="flex items-center gap-2">
                    <button
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition"
                      onClick={() =>
                        setAdultCount((prev) => Math.max(prev - 1, 0))
                      }
                    >
                      -
                    </button>
                    <span className="w-6 text-center">{adultCount}</span>
                    <button
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition"
                      onClick={() => setAdultCount((prev) => prev + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Children</span>
                  <div className="flex items-center gap-2">
                    <button
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition"
                      onClick={() =>
                        setChildCount((prev) => Math.max(prev - 1, 0))
                      }
                    >
                      -
                    </button>
                    <span className="w-6 text-center">{childCount}</span>
                    <button
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition"
                      onClick={() => setChildCount((prev) => prev + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Rooms */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Rooms</span>
                  <div className="flex items-center gap-2">
                    <button
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition"
                      onClick={() =>
                        setRoomCount((prev) => Math.max(prev - 1, 0))
                      }
                    >
                      -
                    </button>
                    <span className="w-6 text-center">{roomCount}</span>
                    <button
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition"
                      onClick={() => setRoomCount((prev) => prev + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Search button */}
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
