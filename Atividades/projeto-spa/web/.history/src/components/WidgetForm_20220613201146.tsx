export function WidgetForm(){
    return (
        <div className="bg-zinc-800 p-4 relative rounded-2xl mb-4 flex flex-col items-center w-[calc(100vw-2rem)] md:w-auto">
            {/* ACIMA TEMOS UM USO INTERESSANTE DE LAYOUT RESPONSIVE */}

            {/* CONTEUDO DO FORM */}
            <header>
                <span className="text-xl leading-6">Deixe seu Feedback</span>
            </header>

            <p>
                Olá, mundo
            </p>

            {/* FOOTER DO DO FORM  */}
            <footer className="text-xs">
                <span>Feito por Felippe</span>
            </footer>
        </div>
    );
}