import { ChatTeardropDots } from 'phosphor-react'

export function Widget(){
    return (
        <div className="absolute bottom-ri">
        <button className="bg-[#000] rounded-full px-3 h-12">
            <ChatTeardropDots  weight="bold" className="w-6 h-6 text-white"/>
        </button>
        </div>
        
    )
}