import { increment, decrement } from "./CounterSlice";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatch(decrement())}
      >
        -
      </button>

      <h1>Count: {count}</h1>

      <button
        onClick={() => dispatch(increment())}
      >
        +
      </button>
    </div>
  );
};

export default Counter;