import React, { useState, useEffect } from "react";

const AsyncInput = ({ onFetch }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!inputValue) return;
      try {
        const response = await onFetch(inputValue);
        setSuggestions(response);
      } catch (error) {
        console.error("Failed to fetch suggestions:", error);
      }
    };

    fetchSuggestions();
  }, [inputValue, onFetch]);

  return (
    <div>
      <input
        title="Hello"
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default AsyncInput;
