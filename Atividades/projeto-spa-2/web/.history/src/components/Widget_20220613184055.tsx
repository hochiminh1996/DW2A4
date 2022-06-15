import { ChatTeardropDots } from 'phosphor-react'

export function Widget() {
    return (
        <div className="absolute bottom-4 right-5">
            {/* ICONE BOLINHA */}
            <button className="bg-[#09f] rounded-full px-3 h-12 flex items-center">
                <ChatTeardropDots weight="bold" className="w-6 h-6 text-white" />

                <span className="text-white">Feeback</span>
            </button>
        </div>

    )
}