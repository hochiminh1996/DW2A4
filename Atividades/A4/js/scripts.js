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

// LOCALSTORAGE
const storage = {
    get(){//pegar
        return JSON.parse(localStorage.getItem("dev-finance:transactions")) || []
        // transformação de string para obj ou array usando a chave do localstorage, no caso, dev-finance. Ou, se não tiver a chave criado, ou seja vazio [primeira vez salvando], cria uma array vazio
    },
    set(transaction){//setar ou guardar
        localStorage.setItem("dev-finance:transactions", JSON.stringify(transaction));
        // recebe dois argumentos : chave e valor. O JSON.stringify está transformando o objeto em uma string, já que o localS trabalha somente com strings
    }
}


// OPERAÇÕES 
const Transaction = {
    

    // COMENTADO OS VALORES INSERIDOS MANUALMENTE. OU SEJA, O USUÁRIO, A PARTIR DE AGORA, VAI INSERIR SEUS PRÓPRIOS VALORES EM TRANSAÇÕES
    // {
    //     description: "Luz",
    //     amount: -50000,
    //     date: "21/01/2021"
    // },
    // {
    //     description: "Website",
    //     amount: 520004,
    //     date: "21/01/2021"
    // },
    // {
    //     description: "Internet",
    //     amount: -20000,
    //     date: "21/01/2021"
    // },
    // {
    //     description: "Iphone",
    //     amount: -52003,
    //     date: "21/05/2021"
    // }, {
    //     description: "Salário",
    //     amount: 350000,
    //     date: "02/04/2022"
    // }

    all: storage.get(),
    //VAI CHAMAR OS VALORES INSERIDOS NO LOCALSTORE, SE HOUVER, OU APRESENTAR UM ARRAY VAZIO

    add(transaction) {
        Transaction.all.push(transaction);
        //adicionar uma transação

        App.reload();
    },  
    remove(index){
        Transaction.all.splice(index,1) 
        App.reload();       
    },
    income() {
        // SOMAR AS ENTRADAS
        let valor = 0;

        Transaction.all.forEach(transacoes => {
            // pegar todas as transações 
            // para cada transação 
            //transações é o novo nome da nossa variável, que contém todos os obj de entrada de valores
            if (transacoes.amount > 0) {
                //se o valor recepcionado for maior que zero
                // somar os valores de entrada e retornar em uma variável
                valor += transacoes.amount;
            }
        });

        return valor;
        //RETURNA A SOMA DOS VALORES POSITIVOS

    },
    expensive() {
        // SOMAR AS SAIDAS
        let valor = 0;

        Transaction.all.forEach(transacoes => {
            /*irá percorrer todos os elementos do obj transaction, que será armazenado
            num novo obj chamado transações.
            */
            if (transacoes.amount < 0) {
                // SE O VALOR FOR MENOR Q 0, IRÁ ADICIONAR A UMA VARIÁVEL E SOMAR TODAS AS ENTRADAS NEGATIVAS
                valor += transacoes.amount;
            }
        })

        return valor;
        //RETURNA A SOMA DOS VALORES NEGATIVOS

    },
    total() {
        // ENTRADAS - SAIDAS 
        return this.income() + this.expensive();

    }
}

/*
   SUBSTITUIR OS DADOS DO HTML PELO DADOS CAPTURADOS PELO JS
*/

const DOM = {
    transactionsContainer: document.querySelector("#data-table tbody"),
    // BUSCANDO O CONTAINER PRINCIPAL DA TABLE

    addTransaction(transaction, index) {//estamos passando um indice do array por parametro
        const tr = document.createElement("tr");//CRIA UMA TR

        tr.innerHTML = DOM.innerHTMLTransaction(transaction,index);
        // TR.innerHTML irá receber os td's da função innerhtml
        //estamos passando um indice do array por parametro

        tr.dataset.index = index;

        DOM.transactionsContainer.appendChild(tr);
        // ADICIONA UMA TR DENTRO DO CONTAINER DA TABLE

    },

    innerHTMLTransaction(transaction, index) {
        //estamos passando um indice do array por parametro
        const CSSClass = transaction.amount > 0 ? "income" : "expense";// USO DE TERNÁRIO

        const amount = Utils.formatCurrency(transaction.amount);
        //tratando os valores recepcionados : sinal, moeda e casas decimais

        // `` PERMITE USAR VARIÁVEIS DENTRO DE TEXTOS
        const html = `
            <td class="description">${transaction.description}</td>
            <td class="${CSSClass}"> ${amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="assets/minus.svg" alt="remover transação" onclick="Transaction.remove(${index})">
            </td>
        `
        return html;
    },

    //REALIZE AS ATUALIZAÇÕES DOS 3 QUADRADINHOS NA TELA : ENTRADA, SAIDA E TOTAL
    updateBalance() {
        document.getElementById("incomeDisplay").innerHTML = Utils.formatCurrency(Transaction.income());
        document.getElementById("expenseDisplay").innerHTML = Utils.formatCurrency(Transaction.expensive());
        document.getElementById("totalDisplay").innerHTML = Utils.formatCurrency(Transaction.total());

    },

    //LIMPA O HTML PARA EVITAR DUPLICAÇÃO DO MESMO CONTEUDO
    clearTransaction(){
        DOM.transactionsContainer.innerHTML = "";
    }

   
}
// DOM.addTransaction(transaction[0]);


//FUNÇÃO PARA FORMATAR AS CASAS DECIMAIS E A MOEDA LOCAL
const Utils = {
    formatAmount(value){
        // value = value * 100;
        value = String(value).replace(/\D/g, "");
        // LIMPA A STRING DOS PONTOS INSERIDOS PELA MÁSCARA

        return Math.round(value);
    
        // ATUALIZAÇÃO E ARREDONDAMENTO
    },

    formatDate(date){

        const splittedDate = date.split("-");
        // SPLIT VAI DIVIDIR A STRING TODA VEZ QUE ENCONTRAR UM TRAÇO. ALÉM DISSO, É BOM LEMBRAR QUE ELE RETORNA UMA DATA EM INGLÊS : ANO, MÊS DIA. E PRECISAMOS CONFIGURAR PARA VERSÃO PT-BR DIA, MÊSE ANO. ALÉM DISSO, CADA PEDAÇO DA STRING DIVIDIDA. OU SEJA, ANO SERÁ [0], MÊS SERÁ [1] E DIA SERÁ [2]
        console.log(splittedDate);


        return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`
        // CONFIGURANDO PARA O PADRÃO DE DATA BRASILEIRO. A [2] CONTÉM O ANO, A [1] CONTÉM O MÊS, E [0] CONTÉM O ANO. ALÉM, CLARO, DO SEPARADOR /
    },

    formatCurrency(value) {
        const signal = Number(value) < 0 ? " - " : "";
        //salva o sinal


        value = String(value).replace(/\D/g, "");
        //expressão regular para capturar apenas numeros

        value = Number(value)/100;
        // PARA EFETUAR A CONTA CORRETAMENTE QUANDO PEGAR O NÚMERO SEM MÁSCARA
        //faz uma conversão, via divisão, de casas decimais
        /*
            NÚMERO COM MÁSCARA : 100,00
            NÚMERO QUE TEVE A MÁSCARA RETIRADA : 10000
            Conversão para o valor correto 10000 / 100 = 100
        
        */

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
        //faz uma estilização para moeda e tipo real-br


        return signal + value;
        //returna o valor para a função chamada
    }
}

// DADOS DO FORMULÁRIO
const Form = {
    description : document.querySelector("#description"),
    amount : document.querySelector("#amount"),
    date : document.querySelector("#date"),
    getValues(){
        return {
            description : Form.description.value,
            amount : Form.amount.value,
            date : Form.date.value
        }
    },

    validateFilds(){
        //VERIFICAR SE FORAM PREENCHIDOS
        const { description, amount, date} = Form.getValues();
        

        if(description.trim() === "" || 
                amount.trim() === "" ||
                  date.trim() === ""){
                    throw new Error("Por favor, preencha todos os campos corretamente");
        }
    },
    
    formatValues(){
        let = {
            description, amount, date
        } = Form.getValues();

        amount = Utils.formatAmount(amount);

        date = Utils.formatDate(date);
        // console.log(date);

        console.log(amount)

        return {
            description,
            amount,
            date
        }//retorna um objeto

    },

    saveTransaction(transaction){
        Transaction.add(transaction);//adiciona uma nova transação na nossa tabela
       
    },

    formateDate(){
        console.log("Formatar os dados");
    },

    clearFilds(){
        Form.description.value = "";
        Form.amount.value = "";
        Form.date.value = "";
    },

    submit(event){
        event.preventDefault();

        // VERIFICAR OS CAMPOS
        try{
            Form.validateFilds();
            //VALIDA SE OS DADOS DE ENTRADA SÃO VÁLIDOS
            
            const transaction = Form.formatValues();
            //CAPTURA A ENTRADA DE UM FORMULÁRIO COM VALORES CORRETOS
            
            Form.saveTransaction(transaction);
            //SALVA OS VALORES INSERIDOS E ADICIONA NO ARRAY

            modal.close();//fecha o modal depois de inserir
            Form.clearFilds(); //limpa os dados inseridos no formulário para a próxima inserção não contenha os mesmos valores


            

        }catch(error){
            alert(error.message);
        }
      
    }
}

const App = {
    init() {
        /* ACESSA O OBJ transation, roda um for para cada elemento da função
    passa o obj como parâmetro e adiciona dentro da var DOM os dados que já existem, que possui um método para adicionar TR's e TD's de acordo com a quantidade de obj em transation, ou cadastrados.
    */
        Transaction.all.forEach((transaction,index) => {
           
            DOM.addTransaction(transaction, index);
            // DAQUI QUE VEM O INDICE, POSIÇÃO DOS ELEMENTOS, QUE SERÁ UTILIZADO PARA REMOVER OS ELEMENTOS DO HTML AO SEREM CLICADOS
        })

        DOM.updateBalance();//ATUALIZA OS CAMPOS DE ENTRADA, SAIDA E TOTAL

        storage.set(Transaction.all)
        
       
       
        //SETANDO OS VALORES NO STORAGE
    },
    reload() {
        DOM.clearTransaction();//FAZ UMA LIMPEZA, PARA N ADICIONAR OS MSM ELEMENTOS NOVAMENTE
        App.init();
    }
}

App.init()

// Transaction.add({
//     id: 1,
//     description: "Olá",
//     amount: 100,
//     date: "22/02/2022"
// });

