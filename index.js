const matrizchaves= 
[["inversor de frequencia","inversores de frequencia","inversor de frequência","inversores de frequência"],
["engrenagem helicoidal","engrenagens helicoidais","engrenagens helicoidais"],
["torno mecanico","tornos mecanicos"],
["vergalhão","vergalhões"],
["arduino","arduinos"],
["contator","contatores"],
["multimetro","multimetros","multímetro","multímetros"],
["paquimetro","paquimetros"],
["javascript"],
["linguagem de programaçao","linguagens de programaçao","linguagem de programação","linguagens de programação"]]
const matrizconceitos=
[["é um dispositivo eletrônico cuja função é variar a rotação de um motor trifásico por meio da mudança de frequência que ele proporciona em seus contatos de saída."],
["tem esse nome devido ao seu formato de hélice, com a presença de dentes transversais que atuam em conjunto para a transmissão do torque. Além disso, a peça trabalha em pares, por meio do encaixe dos dentes do pinhão com a engrenagem durante a operação."],
["é um equipamento que serve para girar uma peça. Para fazer o serviço, a peça em questão é pressionada e fixada no torno. Assim, a peça fixada pode girar em alta velocidade para ser trabalhada utilizando a ferramenta de corte, que no caso dos tornos mecânicos é fixa no equipamento."],
["é uma barra de aço usada na composição das principais armaduras da estrutura com o uso de concreto, como pilares, vigas, lajes, fundações e estruturas de contenção."],
["é uma plataforma eletrônica open source, que tem como objetivo integrar hardware e software de maneira fácil, permitindo que pessoas com pouco conhecimento na área possam desenvolver as suas habilidades e aprendizado de maneira mais simples, aprendendo a eletrônica básica e programação."],
["é um dispositivo eletromecânico que permite, a partir de um circuito de comando, efetuar o controle de cargas num circuito de potência."],
["é uma ferramenta de teste utilizada para medir dois ou mais valores elétricos, principalmente, tensão (volts), corrente (amperes) e resistência (ohms). "],
["é um instrumento usado para medir as dimensões lineares internas, externas e de profundidade de uma peça, normalmente de tamanho pequeno."],
["é uma linguagem de programação que permite implementar funcionalidades mais complexas em páginas web. Sempre que uma página web faz mais do que apenas mostrar informações estáticas para você - ela mostra em tempo real conteúdos atualizados, mapas interativos, animações gráficas em 2D/3D, vídeos, etc."],
["linguagem formal que funciona por meio de uma série de instruções, símbolos, palavras-chave, regras semânticas e sintáticas. A linguagem de programação permite que um programador crie programas a partir de um conjunto de ordens, ações consecutivas, dados e algoritmos."]]
const textarea = document.querySelector("#textarea")
const btnGravar = document.querySelector("#btnGravar")
const btnParar = document.querySelector("#btnParar")
const btnBaixar = document.querySelector("#btnBaixar")
const btnLimpar = document.querySelector("#btnLimpar")
const btn2 = document.querySelector("#btn")
const paragrafo = document.querySelector('.texto_recebido');
const containerimg = document.querySelector(".containerimagens")
const containertextos = document.querySelector("#containertextos")
class speechApi {

  constructor() {

    const SpeechToText = window.SpeechRecognition || window.webkitSpeechRecognition

    this.speechApi = new SpeechToText()
    this.output = textarea.output 
    this.speechApi.continuous = true
    this.speechApi.lang = "pt-BR"
    
    this.speechApi.onresult = (e) => {
      var resultIndex = e.resultIndex
      var transcript = e.results[resultIndex][0].transcript

      textarea.value += transcript + " "
    }
  }

  start() {
    this.speechApi.start()
  }

  stop() {
    this.speechApi.stop()
  }
}

  var speech = new speechApi()

  btnGravar.addEventListener("click", e => {
    btnGravar.disabled = true
    btnParar.disabled = false
    speech.start()
  })
  //gravar quando segurar ponto na tecla ponto
  document.addEventListener("keydown", function(e){
  if(btnGravar.disabled==false){
    if(e.key=="."){
      btnGravar.disabled = true
      btnParar.disabled = false
      speech.start()
      }
  }else{
    
  }
  })
  //parar quando a tecla ponto parar de ser segurada.
  document.addEventListener("keyup", function(e){
    if(e.key=="."){
      btnGravar.disabled = false
      btnParar.disabled = true
      speech.stop()
    }
  })
  btnParar.addEventListener("click", () => {
    btnGravar.disabled = false
    btnParar.disabled = true
    speech.stop()
  })

  btnBaixar.addEventListener('click', () => {
    var text = textarea.value
    var filename = "speech.txt"

    download(text, filename)
  })

  function download(text, filename) {
    var element = document.createElement('a')

    element.setAttribute('href', 'data:text/plaincharset=utf-8,' + encodeURIComponent(text))

    element.setAttribute('download', filename)

    element.style.display = 'none'

    document.body.appendChild(element)

    element.click()

    document.body.removeChild(element)
  }

  btnLimpar.addEventListener("click", () => {
    for(linha=0;linha<11;linha++){
      for(coluna=0;coluna<4;coluna++){
        try{
          let imagemre= document.getElementById("img"+linha)
          let bloco = document.getElementById("containertexto"+linha)
        if(imagemre){
          imagemre.remove()
          }
        if(bloco){
          bloco.remove()
        }
        }
          catch(error){
            console.log(error)
          }
      }
    }
    textarea.value = ""
    paragrafo.innerHTML = ""
    imagem1.setAttribute('src','white.png')
    imagem2.setAttribute('src','white.png')
    btnGravar.disabled = false
    btnParar.disabled = true
    speech.stop()
  })
  btn2.addEventListener("click", () => {
    paragrafo.innerHTML = textarea.value
    texto = textarea.value.replace(/[.,]/g, '').toLowerCase();
    function verificaPresencaString(texto, palavra) {
      return texto.indexOf(palavra) !== -1;
    }
    for(linha=0;linha<11;linha++){
      for(coluna=0;coluna<4;coluna++){
        try{
          let imagemre= document.getElementById("img"+linha)
          let bloco = document.getElementById("containertexto"+linha)
        if(imagemre){
          imagemre.remove()
          }
        if(bloco){
          bloco.remove()
        }
        }
          catch(error){
            console.log(error)
          }
      }
    }
    //escopo para descobrir pegar as palavras chaves para mostrar o conceito
    for(linha=0;linha<11;linha++){
      for(coluna=0;coluna<4;coluna++){
        if(verificaPresencaString(texto,matrizchaves[linha][coluna])){
          var imagem = document.createElement('img')
          imagem.src = 'images/img'+linha+'.png'
          imagem.id = 'img'+linha
          containerimg.appendChild(imagem)

          imagem.style.width = '220px';
          imagem.style.height = '190px';
          imagem.style.border = 'groove'
          imagem.style.borderColor = 'black'

          let bloco = document.createElement('div')
          bloco.id = 'containertexto'+linha
          containertextos.appendChild(bloco)
          bloco.style.border = 'groove'
          bloco.style.borderColor = 'black'

          let titulo_destacado = document.createElement('h1')
          titulo_destacado.id = 'titulo_destacado'+linha
          titulo_destacado.innerHTML = matrizchaves[linha][coluna].toUpperCase()
          bloco.appendChild(titulo_destacado)
          let conceito = document.createElement('p')
          conceito.id = "conceito"+linha
          conceito.innerHTML = matrizconceitos[linha][0]
          bloco.appendChild(conceito)
          conceito.style.fontSize = '16px';

          bloco.style.display = 'flex';
          bloco.style.alignItems = 'initial';
          bloco.style.flexDirection = 'column';
          bloco.style.width = '440px';
          bloco.style.height = '190px';
          coluna+=4
          }
      }
    }
    //fim
    btnGravar.disabled = false
    btnParar.disabled = true
    speech.stop()
  })
