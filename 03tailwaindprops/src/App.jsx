import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './Component/Card'

function App() {
  
  
  const [count, setCount] = useState(0)
  let myObj = {
    username : 'Umank'
  }
  let newArr = [1,2,3,4]
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">
        Tailwind test
      </h1>
      
      <Card  username="chai aur code" btnText = "Click Me" />
      <Card username = "Umank Tiwari" />
      
    </>
  )
}

export default App
