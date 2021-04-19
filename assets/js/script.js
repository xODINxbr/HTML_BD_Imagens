// 1. Pegar as imagens
// a. Utilizar a plataforma do unsplash para pegar as imagens

// 2. Armazenar as imagens

// 3. Exibir as imagens
// a. Montar o layout

const urlBase = "https://source.unsplash.com/random/";
const container = document.getElementById(`container`);



function pegarImagens (){
    const imagens = [];

    for(let i = 0; i < 32; i++){
        const urlImagem = `${urlBase}${gerarNumAleatorio()}x${gerarNumAleatorio()}`; 

        imagens.push(urlImagem);
    }
    
    return imagens; //Testar parametro da função gerarNumAleatorio().
}

pegarImagens (); //Chama a função.

function gerarNumAleatorio(){
    return Math.floor (Math.random() * 10) + 300 ;
}


function montarLayout(){
    const listaImagens = pegarImagens();

    listaImagens.forEach(function(imagem){
        const img = document.createElement(`img`);
        img.src =  imagem;
        container.appendChild(img);
    });
}
montarLayout();
