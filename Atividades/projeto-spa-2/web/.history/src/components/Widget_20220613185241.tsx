import { ChatTeardropDots } from 'phosphor-react'

export function Widget() {
    return (
        <div className="absolute bottom-5 right-5">
            <button className="bg-[#09f] rounded-full px-3 h-12 flex items-center group">
                {/* ICONE BOLINHA */}
                <ChatTeardropDots className="w-6 h-6 text-white" />

                <span className="text-white ">
                    <span className="pl-2">Feedback</span>
                </span>
            </button>
        </div>

    )
}