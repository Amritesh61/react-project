import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [Password, setPassword] = useState('')

  //useRef hook
  const passwordRef = useRef(null)


  const PasswordGenerator = useCallback(()=>{
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str += "0123456789"
    }
    if(charAllowed){
      str += "!@#$%^&*()_+"
    }
    for(let i =1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length +1)

      pass += str.charAt(char)
    }
    setPassword(pass)

  } ,[
    length,
    numberAllowed,
    charAllowed,setPassword
  ])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 20)
    window.navigator.clipboard.writeText(Password)
  },[Password])

  //useEffect hook
  useEffect(()=>{PasswordGenerator()},[length,numberAllowed,charAllowed,PasswordGenerator])

  return (
    <>
    <div className="w-full max-w-xl mx-auto shadow-md
    rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
      
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text"
        value={Password}
        className='outline-none flex-grow w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className="outline-none bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md" 
        >Copy</button> 

      </div>
      <div className = "flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
          type="range"
          min={6}
          max={20}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}/>
          <label>Length: {length}</label>

        </div>
        <div className="flex items-center gap-x-1">
          <input
          type="checkbox"
          defaultChecked={numberAllowed}
          onChange={()=>{setNumberAllowed((prev)=>!prev)}}
          />
          <label htmlFor='numberInput'>Include Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type='checkbox'
              defaultChecked={charAllowed}
              id='charInput'
              onChange={()=>{setcharAllowed((prev)=>!prev)}}
            />
            <label htmlFor='charInput'>Special Characters</label>

          </div>
      </div>

      </div>
        
    </>
  )
}

export default App
