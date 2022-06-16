import { useState } from 'react'

interface TypeButton{
  text : string;
}

function Button(props : text){
  return <button>{props.text}</button>
}

function App() {
  return (
    <Button text="Olá"/>
  )
}

export default App
