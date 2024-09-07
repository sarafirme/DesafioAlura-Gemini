
function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLocaleLowerCase();
    let palavraEncontrada = false;


    if(!campoPesquisa){
        section.innerHTML = "<p>Nenhuma palavra foi digitada</p>"
        return
    }

    let resultados = "";
    let palavra = "";

    for (let dado of dados) {
        palavra = dado.palavra.toLocaleLowerCase()
        
        if(palavra.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
                <h2>
                    ${palavra}
                </h2>
                <img src="${dado.img}" alt="imagem demonstrativa do sinal">
                <a href=${dado.link} target="_blank"><strong>Acesse o video demonstrativo</strong></a>
            </div>
        `;
            palavraEncontrada = true;
        }
        if(!palavraEncontrada){
            section.innerHTML = "<p>Desculpe, a palavra digitada não foi encontrada em nossa base de dados</p>"
        }else{
            section.innerHTML = resultados;
        }
    }
}



