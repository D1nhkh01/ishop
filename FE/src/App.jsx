import { useState } from 'react'
import Home from "../src/page/home/home"

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Home/>
    </>
  )
}

export default App
