
function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value


    if(!campoPesquisa){
        section.innerHTML = "<p>Nenhuma palavra foi digitada</p>"
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase()


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
        }
        if(!resultados){
            resultados = "<p>Desculpe, a palavra digitada ainda não está em nossa base de dados</p>"
        }
    }
    section.innerHTML = resultados;
}



