import React, { useState } from "react";
import "./App.css";
import PlusOne from "./components/plusOne";
import PlusFive from "./components/plusFive";
import MinusSeven from './components/minusSeven';

function App() {
  let [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className={count <= 0 ? "blue" : "green"}>{count === 0 ? "Zero" : count}</h1>
      <PlusOne count={count} setCount={setCount} />
      <PlusFive count={count} setCount={setCount} />
      <MultiplyByThree count={count} setCount={setCount} />
      <DivideBySix count={count} setCount={setCount} />
      <MinusSeven count={count} setCount={setCount} />
    </div>
  );
}

export default App;

export const MultiplyByThree = ({ count, setCount }) => {
  return (
    <button className="count" onClick={() => setCount(count * 3)}>
      x3
    </button>
  );
};

export const DivideBySix = ({count, setCount}) => {
  return (
    <button
      disabled={count <= 0 ? "disabled" : null}
      className="count"
      onClick={() => setCount(count / 6)}
    >
      /6
    </button>
  );
};
