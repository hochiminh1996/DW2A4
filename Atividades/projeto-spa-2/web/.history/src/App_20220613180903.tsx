import { useState } from 'react'

interface TypeButton {
  text: string;
}

function Button(props: TypeButton) {
  return <button className='bg-[#aac8dc] p-1 h-10 rounded'>{props.text}</button>
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
