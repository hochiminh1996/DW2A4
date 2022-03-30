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
        amount: 500000,
        date: "21/01/2021"
    },
    {
        id: 3,
        description: "Internet",
        amount: -20000,
        date: "21/01/2021"
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

        // const amount = Utils.formatCurrency(transaction.amount);
        const amount = Utils.formatCurrency(transaction.amount)

        // `` PERMITE USAR VARIÁVEIS DENTRO DE TEXTOS
        const html = `
            <td class="description">${transaction.description}</td>
            <td class="${CSSClass}"> ${transaction.amount}</td>
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
        console.log(value);
    }
}

transaction.forEach(function (transaction) {
    DOM.addTransaction(transaction);
})
/* ACESSA O OBJ transation, roda um for para cada elemento da função
    passa o obj como parâmetro e adiciona dentro da var DOM, que possui um método para adicionar TR's e TD's de acordo com a quantidade de obj em transation, ou cadastrados.
*/


