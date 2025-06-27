import './App.css';

import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const date = new Date("June 21, 2027");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={()=> setCount((counter) => counter - 1)}>-</button>
        <span>Count: {count}</span>
        <button onClick={()=> setCount((counter) => counter + 1)}>+</button>
      </div>

      <p>
        <span>{count === 0? "Today is, " : ""}</span>
        <span>{date.toLocaleDateString()}</span>
      </p>
    </div>
  );
}