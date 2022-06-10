import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { useState } from "react";
import { Loading } from "../Loading";

interface FeedbackTypeStepProps {
  onScreenshotTaken: (screenshot: string | null) => void;
  screenshot: string | null;
}

export function ScreenshotButton({
  onScreenshotTaken,
  screenshot,
}: FeedbackTypeStepProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);


  // BIBLIOTECA BAIXADA (HTML2CANVAS) PARA AUXILIAR NO PROCESSO DE SCREENSHOT
  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);//sinalidador 

    const canvas = await html2canvas(document.querySelector("html")!);
    // INFORMA QUE SERÁ EFETUADO UM PRINT DA TELA TODA
    const base64image = canvas.toDataURL("image/png");
    //TIRA UM PRINT E CONVERTE PARA UMA IMAGEM PNG NO FORMADO BASE64


    onScreenshotTaken(base64image); // manda a foto via F
    setIsTakingScreenshot(false); // sinaliza que o print foi efetuado
  }


  //verifica se a foto já existe
  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage: `url(${screenshot})`,//mostra uma pequena img
          backgroundPosition: "right bottom",
          backgroundSize: 180,
        }}
        onClick={() => onScreenshotTaken(null)}// apaga a img
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
    >
      {isTakingScreenshot ? (
        <Loading />
      ) : (
        <Camera className="w-6 h-6 text-zinc-100" />
      )}
    </button>
  );
}