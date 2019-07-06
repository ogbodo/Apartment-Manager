import { useState, useEffect } from "react";

function UseLocalStorage(key) {
  const initialState = localStorage.getItem(key) || "";

  const [value, setValue] = useState(JSON.stringify(initialState));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    console.log(JSON.parse(value));
  }, [key, value]);

  return [value, setValue];
}

export default UseLocalStorage;
