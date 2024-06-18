import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () => {
    // console.log("clicked", counter);
    // counter = counter + 1 ;
    setCounter(counter + 1);
  }
  const remvValue = () => {
    // console.log("clicked", counter);
    // counter = counter - 1 ;
    // if(counter) == 0 ? stop
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>learning react-js for FED </h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>add value {counter}</button>
      <button onClick={remvValue}>remove value {counter}</button>
      
    </>
  )
}

export default App
