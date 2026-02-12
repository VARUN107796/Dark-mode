import React, { useState } from "react";

const ThemeCard = ({ title }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "card dark" : "card"}>
      <h2>{title}</h2>
      <button onClick={toggleTheme}>
      {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default ThemeCard;