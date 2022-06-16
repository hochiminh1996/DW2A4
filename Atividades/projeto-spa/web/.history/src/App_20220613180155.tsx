import { useState } from 'react'

interface TypeButton {
  text: string;
}

function Button(props: TypeButton) {
  return <button className='bg-[#09f] p-5 border'>{props.text}</button>
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
