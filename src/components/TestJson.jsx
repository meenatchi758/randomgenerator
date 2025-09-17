import React, { useState } from "react";
import "./TestJson.css";  // Import CSS file

const TestJson = () => {
  const [quote, setQuote] = useState(null);

  const handleClick = async () => {
    try {
      const res = await fetch("/quotes.json"); // fetch from public folder
      if (!res.ok) throw new Error("Failed to load quotes.json");

      const data = await res.json();
      const random = data[Math.floor(Math.random() * data.length)];
      setQuote(random);
    } catch (err) {
      console.error("Error loading JSON:", err);
    }
  };

  return (
    <div className="quote-container">
      <button onClick={handleClick} className="quote-btn">
        Get Random Quote
      </button>

      {quote && (
        <div className="quote-card">
          <h3 className="quote-text">"{quote.content}"</h3>
          <p className="quote-author">— {quote.author}</p>
        </div>
      )}
    </div>
  );
};

export default TestJson;
