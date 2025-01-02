import { useState } from 'react';
function Counter() {
  // Declare a state variable 'count' with initial value of 0
  // 'setCount' is the function used to update 'count'
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      {/* Increment the count when the button is clicked */}
<button onClick={() => setCount(count + 1)}>Increment</button>
<button onClick={()=> setCount(count-1)}>Decrement</button>
    </div>
  );
}

export default Counter;