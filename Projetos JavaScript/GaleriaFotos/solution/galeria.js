(function() {
    const imagens = [
      "imagem1.jpg",
      "imagem2.jpg",
      "imagem3.jpg",
      // Adicione mais imagens aqui
    ];
  
    let indiceAtual = 0;
    const imagemElement = document.getElementById("imagem");
    const botaoAnterior = document.getElementById("anterior");
    const botaoProximo = document.getElementById("proximo");
  
    function atualizarImagem() {
      imagemElement.src = imagens[indiceAtual];
    }
  
    function irParaAnterior() {
      if (indiceAtual === 0) {
        indiceAtual = imagens.length - 1;
      } else {
        indiceAtual--;
      }
      atualizarImagem();
    }
  
    function irParaProximo() {
      if (indiceAtual === imagens.length - 1) {
        indiceAtual = 0;
      } else {
        indiceAtual++;
      }
      atualizarImagem();
    }
  
    botaoAnterior.addEventListener("click", irParaAnterior);
    botaoProximo.addEventListener("click", irParaProximo);
  
    // Inicializar a galeria com a primeira imagem
    atualizarImagem();
  })();
  