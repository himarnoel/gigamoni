import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Nav/>
    </div>
  )
}

export default App
