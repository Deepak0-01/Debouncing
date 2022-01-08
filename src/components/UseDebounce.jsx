import { useState, useEffect } from "react";

const UseDebounce = (value, delay) => {
  const [debounceSearchItem, setdebounceSearchItem] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setdebounceSearchItem(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceSearchItem;
};

export default UseDebounce;
