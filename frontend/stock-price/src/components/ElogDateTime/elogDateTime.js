import React, { useEffect, useRef, useState } from "react";
const ElogDateTime = ({ selected, handleChange }) => {
  const [date, setDate] = useState(selected && selected.split(" ")[0]);
  const dateRef = useRef(null);

  useEffect(() => {
    if (!date) return;
  }, [date]);

  function _handleChange(e) {
    const value = e.target.value;
    setDate(value);
    handleChange(value);
  }

  return (
    <>
      <input
        ref={dateRef}
        value={date}
        onChange={_handleChange}
        type="date"
        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </>
  );
}
export default ElogDateTime;