import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      This project was coded by &nbsp;
      <a
        href="https://github.com/tze-tan"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tze Yi Tan
      </a>
      , open sourced on &nbsp;
      <a
        href="https://github.com/tze-tan/React-Weather-App"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      , hosted on &nbsp;
      <a
        href="https://tze-react-weather.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Netlify
      </a>
      .{" "}
    </div>
  );
}
