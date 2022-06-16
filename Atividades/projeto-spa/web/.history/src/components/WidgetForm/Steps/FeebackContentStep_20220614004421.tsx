import { ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({ 
    feedbackType,
    onFeedbackRestartRequested 
}: FeedbackContentStepProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    return (
        <>
            <header className="p-5">

                <button type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100" 
                onClick={onFeedbackRestartRequested}>
                    <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>

                <span className="text-xl leading-6 flex items-center gap-2">
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.title} className="w-6 h-6" />
                    {feedbackTypeInfo.title}
                </span>


                <CloseButton />
            </header>


            <form className="my-4 w-full">
                <textarea className="min-w-[304px] w-full min-h-[112px] text-sm text-zinc-10 bg-transparent rounded-md border-1 border-[#09f] resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-700 scroll-bar-thin scrollbar-track-transparent" placeholder="Digite o feeback..."></textarea>

            </form>

            <footer className="flex gap-2 mt-2">
                <button type="submit" className="flex justify-between bg-[#09f] mb-2 focus-ring-2 hover:bg-[#05f] transition-all cursors:pointer p-2 rounded-md flex-1 focus:ring-offset-2 focus:ring-of"
                
                >Enviar Feedback</button>
            </footer>
        </>

    )
}