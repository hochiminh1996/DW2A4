import { Camera } from "phosphor-react";


export function ScreenShotButton() {
    function handTakeScreenShot(){

    }


    return (
        <button onClick={screenShotButtonClick} type="button" className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors">
            <Camera className="w-11 h-5" />

        </button>
    )
}