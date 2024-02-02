import { useState } from 'react';
import './App.css'

function App() {
  const [data, setData] = useState(0);

  const onDecrement = () => {
    const updatedCounterValue = data - 1;
    setData(updatedCounterValue);
    updateCounterStyles(updatedCounterValue);
  }

  const onIncrement = () => {
    const updatedCounterValue = data + 1;
    setData(updatedCounterValue);
    updateCounterStyles(updatedCounterValue);
  }

  const onReset = () => {
    setData(0);
    updateCounterStyles(0);
  }

  const updateCounterStyles = (value) => {
    const counterElement = document.getElementById('counterValue');
    if (value > 0) {
      counterElement.style.color = "green";
    } else if (value < 0) {
      counterElement.style.color = "red";
    } else {
      counterElement.style.color = "black";
    }
  }

  return (
    <>
      <div className="bg-container text-center d-flex flex-column justify-content-center">
        <h1 className="counter-heading">Counter</h1>
        <p id="counterValue" className="counter-value">{data}</p>
        <div>
          <button onClick={onDecrement} className="button">DECREASE</button>
          <button onClick={onReset} className="button">RESET</button>
          <button onClick={onIncrement} className="button">INCREASE</button>
        </div>
      </div>
    </>
  )
}

export default App;
