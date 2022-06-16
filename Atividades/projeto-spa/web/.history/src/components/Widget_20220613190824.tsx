import { ChatTeardropDots } from 'phosphor-react'
import { useState } from 'react'

export function Widget() {
    const [isWidgetOpen, setWidgetOpen] = useState(false);

    function toggleWidgetVisibility(){
        setWidgetOpen(!isWidgetOpen)
    }

    return (
        <div className="absolute bottom-5 right-5">
            { isWidgetOpen ? "<p>Olá, mundo</p>"}

            <button onClick={toggleWidgetVisibility} className="bg-[#09f] rounded-full px-3 h-12 flex items-center group">
                {/* ICONE BOLINHA */}
                <ChatTeardropDots className="w-6 h-6 text-white" />

                {/* Visibilidade do texto feedback com propriedades de hover e overflow acionadas ao passar o mouse */}
                <span className="text-white max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                    <span className="pl-2">Feedback</span>
                </span>
            </button>

        </div>

    )
}