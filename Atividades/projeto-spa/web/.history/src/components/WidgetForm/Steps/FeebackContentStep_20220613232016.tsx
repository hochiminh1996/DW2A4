import { ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
}

export function FeedbackContentStep({ feedbackType }: FeedbackContentStepProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    return (
        <>
            <header className="p-5 flex">
                <button type="button" className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100">
                    <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>
                <CloseButton />
                <span className="text-xl leading-6 flex items-center gap-2">
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.title} className="w-6 h-6" />
                    {feedbackTypeInfo.title}
                </span>
            </header>

            {/* CONTEÚDO : LISTA DE OPÇÕES PARA SELECIONAR + IMG

            GAP-2 : ESPAÇAMENTO ENTRE ICONES
            W-FULL : USA O WIDTH INTEIRO (100%) */}


            <div className="flex py-8 gap-2 w-full align-items">
                {

                }

            </div>
        </>

    )
}