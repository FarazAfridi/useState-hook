import React from "react";

const PlusOne = ({count, setCount}) => {
  return (
    <button className="count" onClick={() => setCount(++count)}>
      +
    </button>
  );
};

export default PlusOne;
