const perguntas = [
    {
      pergunta: "Como declarar uma variável em JavaScript?",
      respostas: [
        "var nomeVariavel;",
        "let nomeVariavel;",
        "const nomeVariavel;"
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Uma linguagem de programação",
        "Um modelo de objetos para interação com elementos HTML",
        "Um método de estilização de páginas web"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      respostas: [
        "Ambos comparam valor e tipo, mas '===' também compara a referência de objetos",
        "'==' compara apenas o valor, '===' compara valor e tipo",
        "Não há diferença, ambos comparam valor e tipo"
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de dado primitivo",
        "Um bloco de código reutilizável que pode receber e retornar valores",
        "Um operador de comparação"
      ],
      correta: 1
    },
    {
      pergunta: "Como selecionar um elemento HTML pelo ID usando JavaScript?",
      respostas: [
        "getElementByName('id')",
        "selectElementByID('id')",
        "getElementById('id')"
      ],
      correta: 2
    },
    {
      pergunta: "O que é o operador ternário em JavaScript?",
      respostas: [
        "Um operador que realiza operações ternárias (base-3)",
        "Um operador que verifica três condições simultaneamente",
        "Um operador condicional que substitui um bloco 'if-else'"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a finalidade do método 'push()' em arrays JavaScript?",
      respostas: [
        "Remover o último elemento de um array",
        "Adicionar um elemento ao final de um array",
        "Inverter a ordem dos elementos em um array"
      ],
      correta: 1
    },
    {
      pergunta: "O que é o conceito de escopo em JavaScript?",
      respostas: [
        "A área de uma página web onde os elementos são exibidos",
        "A área de código onde uma variável pode ser acessada",
        "A velocidade de execução de um programa"
      ],
      correta: 1
    },
    {
      pergunta: "Como comentar várias linhas de código em JavaScript?",
      respostas: [
        "// Comentário",
        "/* Comentário */",
        "<!-- Comentário -->"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a utilidade da função 'parseInt()' em JavaScript?",
      respostas: [
        "Converter uma string em um número inteiro",
        "Arredondar um número decimal para o inteiro mais próximo",
        "Conferir se uma variável é um número inteiro"
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou traço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  
    for(let resposta of item.respostas ) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta
  
    corretas.delete(item)
    if(estaCorreta){
      corretas.add(item)
    }
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    
  
    quizItem.querySelector('dl').appendChild(dt)
    }
    
    quizItem.querySelector('dl dt').remove()
  
    quiz.appendChild(quizItem)
  
  }