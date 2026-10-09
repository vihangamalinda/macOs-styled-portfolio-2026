import { useState } from 'react'
import './App.css'
import {Navbar,Welcome} from "#components";

function App() {
  const [count, setCount] = useState(0)

  return (
  <main>
    <Navbar/>
    <Welcome/>
  </main>
  )
}

export default App
