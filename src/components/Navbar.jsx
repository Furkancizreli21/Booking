import React from "react";
import car from "../assets/images/icons/sedan.png";
import airplane from "../assets/images/icons/airplane.png";
import resort from "../assets/images/icons/resort.png";
import activity from "../assets/images/icons/activity.png";
import logo from "../assets/images/icons/logo.png";
import user from "../assets/images/icons/user.png";

function ModernNavbar() {
  const menuItems = [
    { name: "Rent a Car", icon: car, link: "/cars" },
    { name: "Flight Tickets", icon: airplane, link: "/flights" },
    { name: "Hotels", icon: resort, link: "/hotels" },
    { name: "Activities", icon: activity, link: "/activities" },
  ];

  return (
    <div className="relative h-[70vh] bg-cover bg-center">
      <nav className="absolute top-0 left-0 w-full z-50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center h-20">
          <a href="/" className="flex items-center">
            <img src={logo} width={200} height={100} alt="Logo" />
          </a>
          <ul className="hidden md:flex gap-10 items-center">
            {menuItems.map((item) => (
              <li key={item.name} className="relative group">
                <a
                  href={item.link}
                  className="flex items-center gap-2 text-white font-semibold hover:text-[#000957] transition"
                >
                  <img src={item.icon} width={22} height={22} alt={item.name} />
                  {item.name}
                </a>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>
          <div className="hidden md:flex items-center gap-6">
            <a
              href="/profile"
              className="flex items-center gap-2 text-white hover:text-blue-500 transition font-semibold"
            >
              <img src={user} width={24} height={24} alt="Profile" />
              Profile
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default ModernNavbar;
