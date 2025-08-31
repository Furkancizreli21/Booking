// App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import maldives from "./assets/images/images/maldives.jpg";
import WhyUs from "./components/WhyUs";

function App() {
  return (
    <div>
      <div
        className="App"
        style={{
          backgroundImage: `url(${maldives})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <Navbar />
        <SearchBar />
      </div>
      <WhyUs />
    </div>
  );
}

export default App;
