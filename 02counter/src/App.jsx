import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5); // Initialize counter with 5

  // let counter = 5;

  const addValue = () => {
    console.log("value added");
    // counter++;
    // console.log(counter);
    setCounter(counter + 1);
  }

  const decreaseValue = () => {
    console.log("value removed");
    // counter--;
    // console.log(counter);
    if (counter > 0)setCounter(counter - 1);
  }

  return (
    <>
      <h1>Hello</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={decreaseValue}>Remove value</button>
    </>
  )
}

export default App
