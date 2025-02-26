import React, { useCallback, useState } from "react";

function Toggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = useCallback(() => {
    setIsDarkMode((prevMode) => !prevMode);
  }, []);

  const themeText = isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode";

  const themeStyles = {
    backgroundColor: isDarkMode ? "#333" : "#fff",
    color: isDarkMode ? "#fff" : "#000",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease-in-out",
  };

  return (
    <div style={themeStyles}>
      <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "5px",
          border: "none",
          background: isDarkMode ? "#555" : "#ddd",
          color: isDarkMode ? "#fff" : "#000",
        }}
      >
        {themeText}
      </button>
    </div>
  );
}

export default Toggle;
