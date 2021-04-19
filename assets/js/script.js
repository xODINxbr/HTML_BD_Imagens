//const urlBase = "https://source.unsplash.com/random/";
const container = document.getElementById(`container`);

const inputPesquisarNumber = document.getElementById(`inputPesquisarNumber`);
const inputPesquisar = document.getElementById(`inputPesquisar`);
const btnBuscar = document.getElementById(`btnBuscar`);

btnBuscar.addEventListener("click", recuperarValor);

//recupera texto digitado na caixa de pesquisa
function recuperarValor(){
    let inputQtdPesquisa = inputPesquisarNumber.value
    let textoPesquisa = inputPesquisar.value
    verificaTexto(textoPesquisa, inputQtdPesquisa)
}

//Trata o texto digitado para verircar se esta em branco ou esta correto
function verificaTexto(textoPesquisa, inputQtdPesquisa){
    let qtdNumero = Number(inputQtdPesquisa)

    if(textoPesquisa.trim() !== ""){
        
        limpar()
        pegarImagens(textoPesquisa, qtdNumero)

    }else{
        console.log("Invalido")
    }
}

// PEGAR IMAGENS TRATADAS DA URL
function pegarImagens (textoPesquisa = "", qtdNumero = 30){
    const imagens = [];

    for(let i = 0; i < qtdNumero; i++){
        const urlImagem = montarUrl(textoPesquisa)

        imagens.push(urlImagem);
    }
    
    montarLayout (imagens); //Testar parametro da função gerarNumAleatorio().
}

pegarImagens (); //Chama a função.

//Tratamento da URL
function montarUrl(textoPesquisa = ""){
    const urlBase = "https://source.unsplash.com/random/";
    let ulrTratada = `${urlBase}${gerarNumAleatorio()}x${gerarNumAleatorio()}`; 

    if(textoPesquisa !== ""){
        ulrTratada = `${urlBase}${gerarNumAleatorio()}x${gerarNumAleatorio()}/?${textoPesquisa}`; 
    }

    return ulrTratada
}

//LISTAR IMAGENS NO TAMPLATE
function montarLayout(imagens){
    const listaImagens = imagens

    listaImagens.forEach(function(imagem){
        const img = document.createElement(`img`);
        img.src =  imagem;
        container.appendChild(img);
    });
}

//GERA TAMANHO DA IMAGEM ALEATÓRIO
function gerarNumAleatorio(){
    return Math.floor (Math.random() * 10) + 300 ;
}

function limpar(){
    container.innerHTML = ""
}