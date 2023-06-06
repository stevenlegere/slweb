import { useState } from 'react';
import React from 'react';
import '../index.css';
import search from './search.png';

export default function Search(props) {
  const { setCity } = props;
  const [userInput, setUserInput] = useState(null);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleClick = () => {
    setCity(userInput);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter City Name..."
      />
      <button className="icon-button" onClick={handleClick}>
        <img src={search} alt="search" className="icon" />
      </button>
    </div>
  );
}
