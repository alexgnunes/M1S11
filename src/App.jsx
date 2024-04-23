import { useState } from 'react'
import { Button } from "./components/Button"
import Input from "./components/Input"
import ImportNews from "./components/ImportNews"
import InputControl from "./components/InputControl"

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
      <div>
        <ImportNews></ImportNews>
      </div>
      <div>
        <InputControl></InputControl>
      </div>
    </>
  )
}

export default App
