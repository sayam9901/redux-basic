// App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement , selectCount} from "./Reducer"

function App() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const increaseCounterBy5 = () => {
    for (let i = 0; i < 5; i++) {
      dispatch(increment());
    }
  };

  return (
    
    <div>
      <div>Counter: {count}</div>
      <button onClick={increaseCounterBy5}>Increase by 5</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
    </div>
    
  );
}

export default App;
