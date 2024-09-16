// src/Exercise.js
import React, { useState, useEffect } from 'react';

const Exercise = ({ title, image }) => {
  const [checkedState, setCheckedState] = useState(
    new Array(56).fill(false) // 8 weeks * 7 days
  );

  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem(title)) || checkedState;
    setCheckedState(savedState);
  }, []);

  const handleCheckboxChange = (index) => {
    const updatedCheckedState = checkedState.map((item, i) =>
      i === index ? !item : item
    );
    setCheckedState(updatedCheckedState);
    localStorage.setItem(title, JSON.stringify(updatedCheckedState));
  };

  const clearAll = () => {
    const clearedState = new Array(56).fill(false);
    setCheckedState(clearedState);
    localStorage.setItem(title, JSON.stringify(clearedState));
  };

  return (
    <div className="exercise mb-8">
      <h2 className="text-xl font-semibold text-blue-600">{title}</h2>
      <img src={image} alt={title} className="w-24 h-auto my-4" />
      <button 
        onClick={clearAll} 
        className="bg-red-500 text-white px-4 py-2 rounded mb-4"
      >
        Clear All
      </button>
      <div className="calendar grid grid-cols-7 gap-2">
        {Array.from({ length: 8 }, (_, week) => (
          <div key={week}>
            <p className="font-medium">{16 + week * 7}. Sep (Week {week + 1})</p>
            <div className="flex justify-between">
              {'MTWTFSS'.split('').map((day, dayIndex) => {
                const index = week * 7 + dayIndex;
                return (
                  <label key={dayIndex} className="flex flex-col items-center">
                    {day}
                    <input
                      type="checkbox"
                      checked={checkedState[index]}
                      onChange={() => handleCheckboxChange(index)}
                      className="mt-1"
                    />
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercise;