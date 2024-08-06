const caixaPrincipal = document.querySelector("caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultao");

const perguntas =[
    {
        enunciado:"pergunta 1",
        alternativas:["alternativa 1","alternativa 2"]

    },
    {
        enunciado:"pergunta 2",
        alternativas:["alternativa 1","alternativa 2"]

    },
    {
        enunciado:"pergunta 3",
        alternativas:["alternativa 1","alternativa 2"]

    },
]
let atual = 0;
let perguntaAtual;

function mostrapergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent ="";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(
        const alternativas of perguntaAtual.alternativas){
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.testcontent = alternativa;
            caixaAlternativas.appendChild(botaoAlternativas);
            
        }
}
mostrapergunta();
