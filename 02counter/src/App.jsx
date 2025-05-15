import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {

  let [counter , setCounter]= useState(0)

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1
    setCounter(counter + 1)
    //console.log("clicked",counter);
  }
  const removeValue = () => {
    
    setCounter(counter - 1)
  }


  return (
    <>
      <h1>REACT Starting</h1>
    <h2>Counter value: {counter}</h2>

    <button
    onClick={addValue}>Add Value{counter}</button>
    <br />
    <button
    onClick={removeValue}>Decrease Value{counter}</button>
    <p>footer : {counter}</p>

    </>
  )
}

export default App
