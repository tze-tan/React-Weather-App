import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";
import background from "./img/background-image.jpg";
import React from "react";

export default function App() {
  return (
    <div
      className="App"
      style={{
        minHeight: "100vh",
      }}
    >
      <div className="inner-container">
        <Weather defaultCity="Munich" />
        <Footer />
      </div>
    </div>
  );
}
