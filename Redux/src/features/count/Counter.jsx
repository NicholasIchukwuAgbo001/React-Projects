import { Link } from "react-router";
import { increment, decrement, reset } from "./CounterSlice";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-4 justify-center  ">
      <button 
      className="bg-red-300 px-4 py-1 rounded" 
      onClick={() => dispatch(decrement())}
      >
      - 
      </button>
      
      <h1>Count: {count}</h1>

      <button
       className="bg-green-500 px-4 py-1 rounded"
       onClick={() => dispatch(increment())}
       > 
       + 
       </button>
      

      <button
        className="bg-red-500 px-4 py-1 rounded"
        onClick={() => dispatch(reset())}
      >
        Reset
      </button>

      <Link to="/login">Login</Link>
      <Link to="/signup">Login</Link>
    </div>
  );
};

export default Counter;
