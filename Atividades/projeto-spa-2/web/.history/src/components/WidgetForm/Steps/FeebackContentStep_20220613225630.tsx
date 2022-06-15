import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"

interface FeedbackContentStepProps{
    feedbackType : FeedbackType;
}

export function FeedbackContentStep({feedbackType} : FeedbackContentStepProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    return (
        <>
            <header>
                <CloseButton />
                <span className="text-xl leading-6">
                    <img src="fee" alt="" />
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