import "./App.css";
import Search from "./Search";
import Footer from "./Footer";
import Description from "./Description";
import Forecast from "./Forecast";
import background from "./img/background-image.jpg";
import React from "react";

export default function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <div className="inner-container">
        <Search defaultCity="Munich" />
        <Footer />
      </div>
    </div>
  );
}
