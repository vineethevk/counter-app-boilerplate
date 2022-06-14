import { useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(true);
  const handleCount = (value) => {
    if ((count > -1) && value === 1) {
      if (disable) { setDisable(false) }
      setCount((count) => (count + value))
    } else if ((count >= 0) && value === -1) {
      if (count === 1) {
        if (!disable) { setDisable(true) }
      }
      setCount((count) => (count + value))
    }
  }
  return (
    <div className="App">
      <h2 data-testid="counter-value">{count}</h2>
      <button data-testid="counter-decrement-button" onClick={() => handleCount(1)}>Increment</button>
      <button data-testid="counter-increment-button" disabled={disable} onClick={() => handleCount(-1)}>Decrement</button>
    </div >
  );
}

export default App;
