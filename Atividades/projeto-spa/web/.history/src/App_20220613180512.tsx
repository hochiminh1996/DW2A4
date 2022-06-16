import { useState } from 'react'

interface TypeButton {
  text: string;
}

function Button(props: TypeButton) {
  return <button className='bg-[#09f] p-1 h-18'>{props.text}</button>
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
