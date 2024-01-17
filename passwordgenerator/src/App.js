import './App.css';
import React, { useState , useCallback, useEffect, useRef } from'react';

function App() {
  const [length , setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed ] = useState(false)
  const [password , setPassword ] = useState('')


const passRef = useRef(null)


  const generatePassword = useCallback( () => {
    let newPassword = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+-=[]{}|;:,./<>?"
    for(let i = 0; i < length; i++) {
      newPassword += str.charAt(Math.floor(Math.random() * str.length))
    }
    setPassword(newPassword)
  }, [length,  numberAllowed, charAllowed])


useEffect (() => {
  generatePassword()
}, [length, numberAllowed, charAllowed])


const copyPasswordToClipboard = () => {
  window.navigator.clipboard.writeText(password)
  passRef.current?.select()
}

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 ' >
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type='text' 
        className='outline-none w-full py-1 px-3' 
        value={password} 
        placeholder='Password'
         readOnly
         ref={passRef}         
         />
        <button onClick={ copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0'>copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className = 'flex items-center gap-x-1'>
          <input type='range' 
                 min={6}
                 max={100}
                 value={length}
                 onChange={(e) => setLength(e.target.value)}
                 name = '' id=''  className='outline-none' />

                  <label htmlFor='length' className='text-white'>Length : {length}</label>
        </div>
{/* NUmber CheckBox */}
        <div className = 'flex items-center gap-x-1'>
          <input type='checkbox' 
                 defaultChecked={numberAllowed}
                 onChange={() => setNumberAllowed( (prev) => !prev)}
                 name = '' id=''  className='outline-none' />

                  <label htmlFor='number' className='text-white'>Number</label>
        </div>
{/* Char checkboxes */}
        <div className = 'flex items-center gap-x-1'>
          <input type='checkbox' 
                 defaultChecked={charAllowed}
                 onChange={() => setCharAllowed( (prev) => !prev)}
                 name = '' id=''  className='outline-none' />

                  <label htmlFor='chars' className='text-white'>Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
