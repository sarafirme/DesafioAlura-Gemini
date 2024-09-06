
function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value


    if(!campoPesquisa){
        section.innerHTML = "<p>Nenhuma palavra foi digitada</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let saudacao = "";

    for (let dado of dados) {
        saudacao = dado.saudacao.toLowerCase()
        
        if(dado.saudacao.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
                <h2>
                    ${saudacao}
                </h2>
                <img src="${dado.img}" alt="">
                <a href=${dado.link} target="_blank">Acesse o video demonstrativo</a>
            </div>
        `;
        }else{

        }
    }
    section.innerHTML = resultados;
}



