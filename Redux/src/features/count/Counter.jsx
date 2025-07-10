import { useState } from "react";


const Counter = () => {
   const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-6 justify-center p-6">
      <button
      onClick={()=> setCount(count-1)}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        -
      </button>

      <h1 className="text-2xl font-bold">Count: {count}</h1>

      <button
      onClick={()=> setCount(count+1)}
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
