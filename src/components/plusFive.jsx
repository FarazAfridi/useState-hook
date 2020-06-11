import React from "react";

const PlusFive = (props) => {
  return (
    <button className="count" onClick={() => props.setCount(props.count + 5)}>
      +5
    </button>
  );
};

export default PlusFive;
