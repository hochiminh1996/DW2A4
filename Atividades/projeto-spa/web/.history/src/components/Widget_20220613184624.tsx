import { ChatTeardropDots } from 'phosphor-react'

export function Widget() {
    return (
        <div className="absolute bottom-4 right-5">
            {/* ICONE BOLINHA */}
            <button className="bg-[#09f] rounded-full px-3 h-12 flex items-center group">
                <ChatTeardropDots weight="bold" className="w-6 h-6 text-white" />

                <span className="text-white max-w-0 overflow: hidden group-hover">
                    <span className="pl-2">Feedback</span>
                </span>
            </button>
        </div>

    )
}