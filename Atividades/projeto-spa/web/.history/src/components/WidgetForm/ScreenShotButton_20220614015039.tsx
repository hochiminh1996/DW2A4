import html2canvas from "html2canvas";
import { Camera } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";


export function ScreenShotButton() {
    const [isTakingScreenShot, setIsTakingScreenShot] = useState(false);

    // TIRANDO UM SCREENSHOT
    async function handTakeScreenShot() {
        setIsTakingScreenShot(true);
        const canvas = await html2canvas(document.querySelector('html')!)
        const base64image = canvas.toDataURL("image/png");
        console.log(base64image)
        setIsTakingScreenShot(false);
    }


    return (
        <button onClick={handTakeScreenShot} type="button" className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors">
            <Camera className="w-11 h-5" />
        { isTakingScreenShot ? <Loading /> : <Camera className="w-6 h-6"/>}
        </button>
    )
}