import { useState } from 'react'

interface TypeButton {
  text: string;
}

function Button(props: TypeButton) {
  return <button className='bg-[#aac8dc] p-2 h-10 rounded hover:bg-[#09f] transition-colors'>{props.text}</button>
}

function App() {
  return (
    <div className='flex gap-2'>
      <Button text="Olá" />
      <Button text="Enviar" />
      
    </div>
  )
}

export default App
