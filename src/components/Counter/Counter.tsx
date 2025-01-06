import React,{useState} from 'react'

const Counter = () => {
   // State to keep track of the counter value
   const [count, setCount] = useState(0);

   // Handlers for increment, decrement, and reset
   const increment = () => setCount((prevCount) => prevCount + 1);
   const decrement = () => setCount((prevCount) => prevCount - 1);
   const reset = () => setCount(0);
 
   return (
//      <div className="App">
//        <header className="App-header">
//          <h1>Counter App</h1>
//          <p className="count-display">Count: {count}</p>
//          <div className="buttons">
//            <button onClick={increment}>Increment</button>
//            <button onClick={decrement}>Decrement</button>
//            <button onClick={reset}>Reset</button>
//          </div>
//        </header>
//      </div>
//    );

<div className="">
<h1 className="text-4xl font-bold text-gray-800 mb-8">Counter App</h1>
<div className="text-2xl font-semibold text-gray-700 mb-6">Count: {count}</div>
<div className="flex space-x-4">
  <button
    onClick={increment}
    className="px-6 py-2 bg-green-500 text-white font-medium rounded hover:bg-green-600 transition"
  >
    Increment
  </button>
  <button
    onClick={decrement}
    className="px-6 py-2 bg-red-500 text-white font-medium rounded hover:bg-red-600 transition"
  >
    Decrement
  </button>
  <button
    onClick={reset}
    className="px-6 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition"
  >
    Reset
  </button>
</div>
</div>
);

}

export default Counter