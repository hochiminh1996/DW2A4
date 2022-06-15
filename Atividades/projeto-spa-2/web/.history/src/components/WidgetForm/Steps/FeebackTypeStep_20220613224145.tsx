import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton";


interface FeedbackTypeStepProps {
    onFeebackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep(props: FeedbackTypeStepProps) {
    return (
        <>

         /*
            CONTEÚDO : LISTA DE OPÇÕES PARA SELECIONAR + IMG

            GAP-2 : ESPAÇAMENTO ENTRE ICONES
            {/* W-FULL : USA O WIDTH INTEIRO (100%) */}

            */
            <div className="flex py-8 gap-2 w-full align-items">
                {
                    Object.entries(feedbackTypes).map(([key, value]) => {
                        return (
                            <button key={key}
                                // key é o identificador que passamos para cad btn com img
                                className="bg-zinc-700 rounded-lg py-5 w-24 flex-1 flex flex-col items-center border-2 gap-2 border-transparent hover:border-[#09f] focus:outline-none"
                                onClick={() => props.onFeebackTypeChanged(key as FeedbackType)}
                            // O TIPO DE DADO PASSADO SERÁ OBRIGATORIAMENTE UM DEFINIDO DENTRO DE FeedbackType
                            >
                                <img src={value.image.source} alt={value.image.alt} />
                                <span>{value.title}</span>
                            </button>
                        )
                    })

                }

            </div>
        </>

    )

}