const masks = {
    cpf(value){
        console.log(value)
        return value.replace(/\D/g,"")
                   .replace(/(\d{3})(\d)/,"$1.$2")
                   .replace(/(\d{3})(\d)/, "$1.$2")
                   .replace(/(\d{3})(\d{1,2})/,"$1-$2")
                   .replace(/(-\d{2})\d+?$/,"$1")                   
        // /()/ =>agrupamento de caracteres dentro de uma string
        // D = Pega tudo que não for número e substitui por vazio
        // g = Significa Global, ou seja, será aplicado na string inteira
        // d = digito número
        // -\d{2} = dois caracteres após um sinal de negativo, inserido anteriormente. Só vai inserir os últimos dois numeros, impedindo + digitos


    },
    cnpj(value){
        console.log(value)
        return value.replace(/\D/g, "").
        replace(/(\d{2})(\d)/,"$1.$2")
        .replace(/(\d{3})(\d)/,"$1.$2")
        .replace(/(\d{3})(\d)/,"$1/$2")
        .replace(/(\d{4})(\d)/,"$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1")
    },
    phone(value){
        console.log(value)

        return value.replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(\d{4})/, "$1")
        .replace(/(-\d{4})\d+?$/, "$1")
    },
    phoneDDI(value){
        console.log(value)
        return value.replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "+$1 $2")
        .replace(/(\d{2})(\d)/,"($1) $2")
        .replace(/(\d{4})(\d)/, "$1-$2")
        .replace(/(\d{4})/,"$1")
        .replace(/(-\d{4})\d+?$/,"$1")
    },
    cep(value){
        console.log(value)
        return value.replace(/\D/g, "")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{3})\d+?$/, "$1")
    },
    pis(value){
        console.log(value)
        return value.replace(/\D/g, "")
        .replace(/(\d{3})(\d)/,"$1.$2")
        .replace(/(\d{5})(\d)/,"$1.$2")
        .replace(/(\d{5}\.)(\d{2})(\d)/, "$1$2-$3")
        .replace(/(-\d{1})\d+?$/,"$1")
    },
    money(value){
        console.log(value)
        return value.replace(/\D/g, "")
        .replace(/(\d{1})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1,$2")
        .replace(/(\d{2})(\d)/, "$1$2")
        .replace(/(,\d{2})\d+?$/,"$1")
    },
    date(value){
        console.log(value)
        return value.replace(/\D/g, "")
        .replace(/(\d{2})(\d)/,"$1/$2")
        .replace(/(\d{2})(\d)/,"$1/$2")
        .replace(/(\d{4)(\d)/,"$1/$2")
        .replace(/(\/\d{4})\d+?$/,"$1")
        // PARA REPRSENTAR A BARRA BASTA \/ 
    },
    dateWithDashes(value){
        console.log(value)
        return value.replace(/\D/g,"")
        .replace(/(\d{2})(\d)/,"$1-$2")
        .replace(/(\d{2})(\d)/, "$1-$2")
        .replace(/(\d{4})(\d)/,"$1$2")
        .replace(/(-\d{4})\d+?$/,"$1")
    }
}


document.querySelectorAll("input").forEach(($input =>{
    const field = $input.dataset.js

    $input.addEventListener("input", (e) =>{

        e.target.value = masks[field](e.target.value);
    },false)
}))