import React, { useReducer } from 'react';

// Define the initial state
const initialState = {
  count: 0,
  message: '',
};

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'UPDATE_MESSAGE':
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

const App = () => {
  // Initialize the state using the useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  // Event handlers
  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const handleMessageChange = (event) => {
    dispatch({ type: 'UPDATE_MESSAGE', payload: event.target.value });
  };

  return (
    <div>
      <h1>useReducer Example</h1>
      <p>Count: {state.count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <input
        type="text"
        placeholder="Enter a message"
        value={state.message}
        onChange={handleMessageChange}
      />
      <p>Message: {state.message}</p>
    </div>
  );
};

export default App;
