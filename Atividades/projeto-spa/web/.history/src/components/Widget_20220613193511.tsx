import { ChatTeardropDots } from 'phosphor-react'
import { useState } from 'react'
import { Popover } from '@headlessui/react'; // para acessibilidade

export function Widget() {
    

    return (
        <div className="absolute bottom-5 right-5">
            { isWidgetOpen ? "Olá, mundo" : null}

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