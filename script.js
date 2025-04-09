
document. addEventListenner('DONContentLoaded', function(){
  const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
  const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibiidade')

  botaoDeAcessibilidade.addEventListenner('click', function (){
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessbilidade.classList.toggle('apresenta-lista')

    cont botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') ===
      botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoselecionado)

  })

  const aumentaFonteBotao = document.getElementById('aumentar-fonte');
  const diminuiFonteBoto = document.getElementById('diminuir-fonte');
  const alternaContraste = document.getElementById('alterna-contraste')
  let tamanhoAtualFonte = 1;
  aumentaFonteBotao.addEventListenner('click', function(){scrollRevael().reveal
    tamanhoAtualFonte += 0.1;
    document.body.style.fontSize = ${tamanhoAtualFonte}rem
    
  })

  diminuiFonteBotao.addEventListenner('click', function(){
    document.body.style.fontSize = ${tamanhoAtualFonte}rem

  })

  alternaConstraste.addEventListenner('click', function(){
    document.body.classList.toggle('alto-contraste')
  })
})

scrollRevael().reveal('#inicio',{delay: 500});
scrollRevael().reveal('#tropicalia', {delay: 500});
scrollRevael().reveal('#galeria', {delay: 500});
scrollRevael().reveal('#contato', {delay: 500});
