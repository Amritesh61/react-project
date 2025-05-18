import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("red")

  return (
  
      <div className="w-full h-screen flex flex-col items-center"
      style={{backgroundColor: color}}
      >

        <div className="fixed flex  flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
            <button 
            onClick={() => setColor("red")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "red"}}>Red</button>
            <button 
            onClick={() => setColor("blue")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "Blue"}}>Blue</button>
            <button 
            onClick = {()=> setColor("Green")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "Green"}}>Green</button>
            <button 
            onClick={()=> setColor("Grey")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "Grey"}}>Grey</button>
            <button 
            onClick = {()=> setColor("Yellow")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "Yellow"}}>Yellow</button>
            <button 
            onClick={()=> setColor("Orange")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "Orange"}}>Orange</button>
            <button
            onClick={()=> setColor("Magenta")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "Magenta"}}>Magenta</button>
            <button
            onClick={()=> setColor("Pink")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "Pink"}}>Pink</button>
            <button
            onClick={()=> setColor("Black")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "Black"}}>Black</button>
            <button
            onClick={()=> setColor("White")}
            className=" outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor: "White"}}>White</button>
            <button
            onClick={()=> setColor("Lavender")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "Lavender"}}>Lavender</button>
            <button
            onClick={()=> setColor("Cyan")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "Cyan"}}>Cyan</button>    
          </div>
        </div>
      </div>
        
    
  )
}

export default App
