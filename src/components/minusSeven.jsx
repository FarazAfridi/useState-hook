import React from "react";

const MinusSeven = ({count , setCount}) => {

  return (
    <button
      disabled={count <= 0 ? "disabled" : null}
      className="count"
      onClick={() => setCount(count - 7)}
    >
      -7
    </button>
  );
};

export default MinusSeven;
