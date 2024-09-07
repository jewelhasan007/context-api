import { useState } from 'react'

import './App.css'
import Grandpa from './Grandpa'
import LocalStorage from './LocalStorage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Prop Drilling</h1>
      <Grandpa></Grandpa>
   
    </>
  )
}

export default App
