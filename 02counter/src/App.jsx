import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function App() {

  let [counter,setCounter] = useState(5)
  // let counter = 5
  const addValue = () => {
    if(counter < 20 ) 
    setCounter(counter + 1)
    
  }
  // By using hooks i can update the data in UI like variable updation..........
  const subValue = () => {
    if(counter > 0)
    setCounter(counter-1)
  }


  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value :{counter}</h2>
      <button
        onClick={addValue}
      >Add value {counter} </button> <br />
      <button
        onClick={subValue}
      >Remove Value {counter}</button>
      <p>footer:{counter}</p>


    </>
  )
}

export default App
