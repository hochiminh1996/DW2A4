import { CloseButton } from "../../CloseButton";
import { FeedbackType, feedbackTypes } from "..";
import { ArrowLeft, Camera } from "phosphor-react";
import { ScreenshotButton } from "../ScreenshotButton";
import { FormEvent, useState } from "react";


interface FeedbackTypeStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void;
    onFeedbackSent: () => void;
}


export function FeedbackContentStep({
    feedbackType,
    onFeedbackRestartRequested,
    onFeedbackSent,
}: FeedbackTypeStepProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    const [screenshot, setScreenshot] = useState<string | null>(null);
    //Estado para armazenar a screen que foi tirada. Ele será uma string se ela não existir e nulo se já existir

    const [comment, setComment] = useState("");
    // Estado : Comentário do feedback

    function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault();

        // setIsSendingFeedback(false);
        onFeedbackSent();
    }


    return (
        <>
            <header>
                <button
                    type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100" title="Voltar" onClick={onFeedbackRestartRequested}>
                    <ArrowLeft weight="bold" className="w-4 h-4" />

                </button>

                <span className="text-xl leading-6 flex items-center gap-2">
                    <img
                        src={feedbackTypeInfo.image.source}
                        alt={feedbackTypeInfo.image.alt}
                        className="w-6 h-6"
                    />
                    {/* Terá os icones */}
                    {feedbackTypeInfo.title}
                </span>
            </header>

            {/* O LOCAL ONDE O USUÁRIO IRÁ INSERIR AS INFORMAÇÕES DO SEU PROBLEMA */}
            <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
                <textarea
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-[#09F] focus:ring-[#09F] focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                    placeholder="Conte com detalhes o que está acontecendo..."
                    onChange={(event) => setComment(event.target.value)}

                />

                <footer className="flex gap-2 mt-2">
                    <ScreenshotButton screenshot={screenshot}//está passando o Estado da foto. Caso tenha sido tirada ou não
                        onScreenshotTaken={setScreenshot} />

                    <button
                        type="submit" disabled={comment.length==0}
                        className="p-3 bg-[#09f] rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-[#09f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-colors disabled:opacity-50 disabled:hover:bg-[#09f]"
                    >Enviar Feedback
                    </button>
                </footer>
            </form>




        </>
    );
}