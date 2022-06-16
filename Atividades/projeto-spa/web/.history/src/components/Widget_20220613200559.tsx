// COMPONENTE DA BOLINHA E CHAMADA DE OUTROS COMPONENTES

import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'; // para acessibilidade
import { WidgetForm } from './WidgetForm';

export function Widget() {
    return (
        //COMPONENTES

        <Popover className="absolute bottom-4 right-4 md:bottom-10 md:right-10 flex flex-col items-end">
            {/* COMPONENTE FORMULÁRIO  */}
            <Popover.Panel>
                <WidgetForm />
            </Popover.Panel>


            <Popover.Button className="bg-[#09f] rounded-full px-3 h-12 flex items-center group">
                {/* ICONE BOLINHA */}
                <ChatTeardropDots className="w-6 h-6 text-white" />

                {/* Visibilidade do texto feedback com propriedades de hover e overflow acionadas ao passar o mouse */}
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                    <span className="pl-2">Feedback</span>
                </span>
            </Popover.Button>

        </Popover>

    )
}