import { useState } from 'react'
import { Button } from "./components/Button"
import Input from "./components/Input"

function App() {
  const [contador, setContador] = useState(0)

  function incrementa() {
    setContador((prevState) => {
      return prevState + 1
    })
  }

  function decrementa() {
    setContador((prevState) => {
      return prevState - 1
    })
  }

  return (
    <>
      <div>
        <Button onClick={decrementa} >-</Button>  
        <Input>{contador}</Input> 
        <Button onClick={incrementa} >+</Button>
      </div>
    </>
  )
}

export default App
