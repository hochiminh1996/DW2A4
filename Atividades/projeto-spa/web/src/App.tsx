/*
  Em SPA, o html é gerado em tempo de execução pelo javascript. Ou seja, quando o usuário acessa a página. O conteúdo é inserido na div "root" do arquivo index.html
 */

import { Widget } from "./components/Widget";


export function App() {
  return <Widget />
}
// Componente : É uma função que retorna HTML, a exemplo de App()

