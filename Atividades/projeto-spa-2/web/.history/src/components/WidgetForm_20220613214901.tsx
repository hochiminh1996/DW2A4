// TELA DO FORMULÁRIO 

import { CloseButton } from "./CloseButton";
import bugImage from "../assets/bug.svg"
import ideiaImage from "../assets/idea.svg"
import praiseImage from "../assets/praise.png"
import otherImage from "../assets/thought.svg"
import { useState } from "react";


// TIPOS DE FEEDBACK
const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: bugImage,
            alt: "Inseto imagem"
        }
    },
    IDEIA: {
        title: "Ideia",
        image: {
            source: ideiaImage,
            alt: "Ideia imagem"
        }
    },
    PRAISE: {
        title: "Elogio",
        image: {
            source: praiseImage,
            alt: "Elogio imagem"
        }
    },
    OTHER: {
        title: "Outros",
        image: {
            source: otherImage,
            alt: "Balão imagem"
        }

    }
};

type FeedbackType = keyof typeof feedbackTypes;
// O FeedbackType será um tipo que aceitará somente dados do tipo bug, idea...

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    // O STATUS PODE SER APENAS OS QUE FOREM PASSADOS DENTRO DO TIPO FeedbackType, QUE CONTÉM IDEIA, OTHERS, BUG, PRAISE OU NULO
    
    return (
        <div className="bg-zinc-800 p-4 relative rounded-2xl mb-4 flex flex-col items-center w-[calc(100vw-2rem)] md:w-auto">
            {/* ACIMA TEMOS UM USO INTERESSANTE DE LAYOUT RESPONSIVE */}

            {/* CONTEUDO DO FORM E BUTTON CLOSE */}
            <header>
                <CloseButton />
                <span className="text-xl leading-6">Deixe seu Feedback</span>
            </header>


           {!}


            {/* FOOTER DO DO FORM  */}
            <footer className="text-xs text-neutral-400">
                <span>Feito por <a className="underline underline-offset-2 hover:bg-[#09f] hover:text-zinc-900 transition-all rounded" href="">Felippe</a></span>
            </footer>
        </div>
    );
}