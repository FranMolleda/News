import React, { useState } from "react";

const useSelect = (initialState, options) => {
  const [selectstate, setSelectState] = useState(initialState);

  const NewsSelection = () => {
    return (
      <select
        className="browser-default"
        onChange={(e) => setSelectState(e.target.value)}
        value={selectstate}
      >
        {options.map((category, i) => {
          return (
            <option key={i} value={category.value}>
              {category.label}
            </option>
          );
        })}
      </select>
    );
  };
  return [selectstate, NewsSelection];
};

export default useSelect;
