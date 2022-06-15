import { useState } from 'react'

interface TypeButton {
  text: string;
}

function Button(props: TypeButton) {
  return <button className=''>{props.text}</button>
}

function App() {
  return (
    <div>
      <Button text="Olá" />
      <Button text="Enviar" />
      
    </div>
  )
}

export default App
