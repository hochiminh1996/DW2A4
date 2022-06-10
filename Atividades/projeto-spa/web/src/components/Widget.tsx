//Widget é um componente

import { ChatTeardropDots } from "phosphor-react";
// Importando o icone, chamado ChatTeardropDots, de uma biblioteca chamada Phosphor (https://github.com/phosphor-icons/phosphor-home)

import { useState } from "react"; //Controle de Status
import { Popover } from '@headlessui/react';// Também faz controle de status. A principal diferença é que ele é muito útil na questão de acessibilidade de usuários.
import { WidgetForm } from "./WidgetForm";
//Import do componente Formulário que aparecerá ao clicar

//Componente 
export function Widget() {
    /*
            bg - backgrund
            rounded - arredondamento
            p - padding
            h - height 
            group - cria um grupo de elementos   
    */

    /*
    Controle de estados | iniciado como false
        const [isWidgetOpen, setIsWidgetOpen] = useState(false);
    
    alternar a visibilidade do widget
        function toggleWidgetVisibily(){
            setIsWidgetOpen(!isWidgetOpen);
            Se tiver false, troca para true. Se tiver true, troca para false
        }
          

        { isWidgetOpen ? <h1>Olá</h1> : null }  
          Ternário de click 
    */
    return (
        <Popover className="absolute bottom-4 right-4 md:bottom-8 md-right-8 flex flex-col items-end">
            <Popover.Panel>
                <WidgetForm />
            </Popover.Panel>


            <Popover.Button className="bg-violet-500 rounded-full px-3 h-12 flex items-center text-white group">
                <ChatTeardropDots className='w-6 h-6' />

                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">Feedback</span>
            </Popover.Button>
        </Popover>
    )
}