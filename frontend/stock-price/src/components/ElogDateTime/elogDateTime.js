import React, { useEffect, useRef, useState } from "react";
export default function ElogDateTime({ selected, handleChange }) {
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
      />
    </>
  );
}