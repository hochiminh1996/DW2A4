// MODAL AO CLICAR
const modal = {
    open() {
        //abrir o modal 
        //adicionar a classe active
        document.querySelector(".modal-overlay").classList.add("active");

        /*
            DOM = OBJETO E CONTÉM TODO O HTML
            É possível acessar todos os atributos e selectores pelo document, DOM, e buscar um selector cuja classe se chama .modal-overlay e adiciona uma nova classe, a active que abre o modal
        */
    }, close() {
        //fechar o modal 
        //remover a classe active

        document.querySelector(".modal-overlay").classList.remove("active");

        /*
            DOM = OBJETO E CONTÉM TODO O HTML (document)
            É possível acessar todos os atributos e selectores pelo document, DOM, e buscar um selector cuja classe se chama .modal-overlay e remover uma classe que ele possui, na caso, a classe active que abre o modal.
        */
    }
}


const transaction = [
    {
        id: 1,
        description: "Luz",
        amount: -50000,
        date: "21/01/2021"
    },
    {
        id: 2,
        description: "Website",
        amount: 520004,
        date: "21/01/2021"
    },
    {
        id: 3,
        description: "Internet",
        amount: -20000,
        date: "21/01/2021"
    },
    {
        id: 4,
        description: "Iphone",
        amount: -52003,
        date: "21/05/2021"
    },
]

// OPERAÇÕES 
const Transaction = {
    income() {
        // SOMAR AS ENTRADAS
    },
    expensive() {
        // SOMAR AS SAIDAS 
    },
    total() {
        // ENTRADAS - SAIDAS 
    }
}

/*
   SUBSTITUIR OS DADOS DO HTML PELO DADOS CAPTURADOS PELO JS
*/

const DOM = {
    transactionsContainer: document.querySelector("#data-table tbody"),
    // BUSCANDO O CONTAINER PRINCIPAL DA TABLE

    addTransaction(transaction, index) {
        const tr = document.createElement("tr");//CRIA UMA TR

        tr.innerHTML = DOM.innerHTMLTransaction(transaction);
        // TR.innerHTML irá receber os td's da função innerhtml

        DOM.transactionsContainer.appendChild(tr);
        // ADICIONA UMA TR DENTRO DO CONTAINER DA TABLE


    },
    innerHTMLTransaction(transaction) {
        const CSSClass = transaction.amount > 0 ? "income" : "expense";// USO DE TERNÁRIO

        const amount = Utils.formatCurrency(transaction.amount);
        //tratando os valores recepcionados : sinal, moeda e casas decimais

        // `` PERMITE USAR VARIÁVEIS DENTRO DE TEXTOS
        const html = `
            <td class="description">${transaction.description}</td>
            <td class="${CSSClass}"> ${amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="assets/minus.svg" alt="remover transação">
            </td>
        `
        return html;
    }
}
// DOM.addTransaction(transaction[0]);



const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? " - " : "";
        //salva o sinal
        

        value = String(value).replace(/\D/g,"");
        //expressão regular para capturar apenas numeros

        value = Number(value)/100;
        //faz uma conversão, via divisão, de casas decimais

        value = value.toLocaleString("pt-BR",{
            style : "currency",
            currency : "BRL"
        });
        //faz uma estilização para moeda e tipo real-br


        return signal + value;
        //returna o valor para a função chamada
    }
}

transaction.forEach(function (transaction) {
    DOM.addTransaction(transaction);
})
/* ACESSA O OBJ transation, roda um for para cada elemento da função
    passa o obj como parâmetro e adiciona dentro da var DOM, que possui um método para adicionar TR's e TD's de acordo com a quantidade de obj em transation, ou cadastrados.
*/


