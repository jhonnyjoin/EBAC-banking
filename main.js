const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById(`nome-beneficiario`);
let formEValido = false; /* considera como invalido por padrao*/

function validaNome(nomeCompleto) { /*valida os nomes contando os numeros de espacos*/
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener(`submit`, function(e) { /*quando der submit comeca a funcao e(event)*/
    
    e.preventDefault(); /* cancela a acao padrao do submit de dar reloaded na pagina*/

    
    const numeroContaBeneficiario = document.getElementById(`numero-conta`);
    const valorDeposito = document.getElementById(`valor-deposito`);
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>`;

    formEValido = validaNome(nomeBeneficiario.value) /*considera valido quando validaNome for valido tambem*/
    if (formEValido) { 
        const containerMensagemSucesso = document.querySelector(".success-message");

        /*se a constante conseguir rodar sem problemas, querySelector usa a classe .success-message para inserir um conteudo HTML no elemento*/
        containerMensagemSucesso.innerHTML = mensagemSucesso 
        containerMensagemSucesso.style.display = "block"; /* style para acessar o estilo e mudar a propriedade*/

/*quando o formEvalido roda e a mensagem de sucesso aparecer
usa o .value para reescrever o formulario com " " (espaço vazio) */

        nomeBeneficiario.value ='' 
        numeroContaBeneficiario.value =''
        valorDeposito.value = ''

    } else {
        document.querySelector(".error-message").style.display = "block"; /*se nao for valido aparece mensagem de erro mudando o display none para block*/
    }
})

nomeBeneficiario.addEventListener("keyup", function(e) { /*pega o registro do que o user digita em tempo real*/
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);

    if (!formEValido)  { /*! = nao*/
        nomeBeneficiario.classList.add('error'); /* classlist.add adiciona uma classe ao elemento citado*/
        document.querySelector(".error-message").style.display = "block";
    } else {
        nomeBeneficiario.classList.remove('error') /*classlist.remove remove uma classe do elemento citado*/
        document.querySelector(".error-message").style.display = "none";
    }
});
