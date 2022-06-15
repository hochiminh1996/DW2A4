import { ArrowLeft, Camera } from "phosphor-react";
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
                <button type="button" className="p-2 bg-zinc-800 rounded-md boder-transparent ">
                    <Camera className="w-6 h-6" />

                </button>

                <button type="submit" className="p-2 mb-2  rounded-md border-transparent flex-1 flex justify-center items-center bg-[#09f] hover:bg-[#06f] border-zinc-900 transition-all w-full"
                
                >Enviar Feedback</button>
            </footer>
        </>

    )
}