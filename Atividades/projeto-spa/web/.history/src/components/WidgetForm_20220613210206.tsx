// TELA DO FORMULÁRIO 

import { CloseButton } from "./CloseButton";
import bugImage from "../assets/bug.svg"
import ideiaImage from "../assets/idea.svg"
import praiseImage from "../assets/praise.png"
import otherImage from "../assets/thought.svg"


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


export function WidgetForm() {
    return (
        <div className="bg-zinc-800 p-4 relative rounded-2xl mb-4 flex flex-col items-center w-[calc(100vw-2rem)] md:w-auto">
            {/* ACIMA TEMOS UM USO INTERESSANTE DE LAYOUT RESPONSIVE */}

            {/* CONTEUDO DO FORM E BUTTON CLOSE */}
            <header>
                <CloseButton />
                <span className="text-xl leading-6">Deixe seu Feedback</span>
            </header>


            {
            /* CONTEÚDO : LISTA DE OPÇÕES PARA SELECIONAR + IMG
            
                GAP-2 : ESPAÇAMENTO ENTRE ICONES 
                W-FULL : USA O WIDTH INTEIRO (100%)
            */}
            <div className="flex py-8 gap-2 w-full align-items">
                {
                    Object.entries(feedbackTypes).map(([key,value]) => {
                        return (
                            <button
                                className="flex flex-col align-items"
                            >
                                <img src={value.image.source} alt={value.image.alt} />
                                <span>{value.title}</span>
                            </button>
                        )
                    })

                }

            </div>


            {/* FOOTER DO DO FORM  */}
            <footer className="text-xs text-neutral-400">
                <span>Feito por <a className="underline underline-offset-2 hover:bg-[#09f] hover:text-zinc-900 transition-all rounded" href="">Felippe</a></span>
            </footer>
        </div>
    );
}