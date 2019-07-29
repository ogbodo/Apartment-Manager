import React, { useState } from "react";

function useDropdown(label, defaultValue, options, selectedValue) {
  const [state, setstate] = useState(defaultValue);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

  function Dropdown() {
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={e => setstate(e.target.value)}
        onBlur={e => setstate(e.target.value)}
      >
        <option>{selectedValue}</option>
        <option>
          {options.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </option>
      </select>
    </label>;
  }

  return [state, Dropdown, setstate];
}

export default useDropdown;
