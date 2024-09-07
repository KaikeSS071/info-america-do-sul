function pesquisar() {
    // Seleciona a seção HTML com o ID "resultados-pesquisa" e armazena na variável "section".
    // Essa seção será usada para exibir os resultados da pesquisa.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campoPesquisa").value

    //se campoPesquisa for uma string sem nada
    if(campoPesquisa == ""){
      section.innerHTML = "<p>nada foi encontrado</p>"
      return
    };

    campoPesquisa = campoPesquisa.toLowerCase()
    
    // Inicializa uma string vazia para armazenar os resultados da pesquisa formatados em HTML.
    let resultados = "";

    let titulo = "";
    let descricao = "";
    let idioma = "";
    let moeda = "";
  
    // Para cada dado, cria um bloco HTML com as informações do resultado da pesquisa.
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      


      //se titulo includes campoPesquisa
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa))


        //cria um novo elemento
          resultados += `
            <div class="item-resultado">
              
              <h2><a href="#" target="_blank">${dado.titulo}</a></h2>

              <p class="descricao-meta">${dado.descricao}</p><br>
              <p>idioma = ${dado.idioma}</p>
              <p>moeda = ${dado.moeda}</p>
              <p>populaçao ~= ${dado.populacao}</p><br>
              <a href="${dado.bandeira}" target="_blank">bandeira</a><br>
              <a href="${dado.link}" target="_blank">mais informações</a>
            </div>
      `
    };

    if(!resultados){
      resultados = "<p>nenhum resultado corresponde a sua pesquisa</p>"
    };
  
    // Atribui o conteúdo HTML completo da string "resultados" à propriedade innerHTML da seção.
    section.innerHTML = resultados;
  }