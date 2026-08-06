const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está preparado para o teste? ",

        alternativas: [
            {
                texto: "Sim",
                afirmacao: ""
            },
            {
                texto: "Lógico",
                afirmacao: ""
            }
        ]
    },{
        enunciado: "Qual é o nome completo da Billie Eilish?",

        alternativas: [
            {
                texto: "Billie Eilish Pirate Baird O’Connell",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Billie Eilish Baird O'Connell",
                afirmacao: "Falso"
            },
            {
                texto: "Billie Eilish Finneas O'Connell",
                afirmacao: "Falso"
            },
            {
                texto: "Billie Eilish Pirate Smith",
                afirmacao: "Falso"
            }
        ]
    },
    {
        enunciado: "Em que ano Billie Eilish nasceu?",
        alternativas: [
            {
                texto: "1999",
                afirmacao: "Falso"
            },
            {
                texto: "2001",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "2003",
                afirmacao: "Falso"
            },
            {
                texto: "2000",
                afirmacao: "Falso"
            }
        ]
    },
    {
        enunciado: "Qual foi o primeiro grande sucesso da Billie Eilish?",
        alternativas: [
            {
                texto: "Ocean Eyes",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Bad Guy",
                afirmacao: "Falso"
            },
            {
                texto: "Bury a Friend",
                afirmacao: "Falso"
            },
            {
                texto: "Bellyache",
                afirmacao: "Falso"
            }      
        ]
    },
    {
        enunciado: "Quem é o irmão e principal parceiro musical dela?",
        alternativas: [
            {
                texto: "Patrick",
                afirmacao: "Falso"
            },
            {
                texto: "Justin",
                afirmacao: "Falso"
            },
            {
                texto: "Frankie",
                afirmacao: "Falso"
            },
            {
                texto: "Finneas",
                afirmacao: "Verdadeiro"
            }
        ]
    },
    {
        enunciado: "Qual álbum inclui a música Bad Guy?",
        alternativas: [
            {
                texto: "When We All Fall Asleep, Where Do We Go?",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Don't Smile at Me",
                afirmacao: "Falso"
            },
            {
                texto: "Hit Me Hard and Soft",
                afirmacao: "Falso"
            },
            {
                texto: " Happier Than Ever",
                afirmacao: "Falso"
            }
        ]
    },
    {
        enunciado: "Em que país Billie Eilish nasceu?",
        alternativas: [
            {
                texto: "Reino Unido",
                afirmacao: "Falso"
            },
            {
                texto: "Estados Unidos",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Austrália",
                afirmacao: "Falso"
            },
            {
                texto: "Canadá",
                afirmacao: "Falso"
            }
        ]
    },
    {
        enunciado: "Qual é o estilo musical mais associado à Billie Eilish?",
        alternativas: [
            {
                texto: "Dark pop",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Synthpop",
                afirmacao: "Falso"
            },
            {
                texto: "Indie rock",
                afirmacao: "Falso"
            },
            {
                texto: "R&B contemporâneo",
                afirmacao: "Falso"
            }    
        ]
    },
    {
        enunciado: "Quantos prêmios Grammy a Billie Eilish já ganhou no total (até 2024/2025)?",
        alternativas: [
            {
                texto: "5 Grammys",
                afirmacao: "Falso"
            },
            {
                texto: "10 Grammys",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "12 Grammys",
                afirmacao: "Falso"
            },
            {
                texto: "Nenhum",
                afirmacao: "Falso"
            }
        ]
    },
    {
        enunciado: "Qual música da Billie foi tema do filme 007: Sem Tempo para Morrer?",
        alternativas: [
            {
                texto: "What Was I Made For?",
                afirmacao: "Falso"
            },
            {
                texto: "Live and Let Die",
                afirmacao: "Falso"
            },
            {
                texto: "Skyfall",
                afirmacao: "Falso"
            },
            {
                texto: "No Time to Die",
                afirmacao: "Verdadeiro"
            }
        ]
    },
    {
        enunciado: "Qual é uma característica marcante do estilo visual da Billie Eilish?",
        alternativas: [
            {
                texto: "Vestidos de gala clássicos",
                afirmacao: "Falso"
            },
            {
                texto: "Roupas sociais e ternos formais",
                afirmacao: "Falso"
            },
            {
                texto: " Roupas largas e oversized",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Estilo totalmente focado em roupas brilhantes e neon",
                afirmacao: "Falso"
            }
        ]
    }    
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();

let contagemAfirmacoes = {}; // Objeto para armazenar a contagem de cada afirmação

function respostaSelecionada(opcaoSelecionada) {
    const afirmacaoSelecionada = opcaoSelecionada.afirmacao;
    if (contagemAfirmacoes.hasOwnProperty(afirmacaoSelecionada)) {
        contagemAfirmacoes[afirmacaoSelecionada]++;
    } else {
        contagemAfirmacoes[afirmacaoSelecionada] = 1;
    }
    
    historiaFinal += afirmacaoSelecionada + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    if (Object.keys(contagemAfirmacoes).length > 0) {
        caixaPerguntas.innerHTML = '<a class="clique2" href="https://anabarros-22.github.io/anabarros.2T.3B/">Reiniciar Teste</a> Parabéns pela tentativa. De 10 questões, você acertou: ';
        const numeroVerdadeiro = contagemAfirmacoes['Verdadeiro'] || 0;
        textoResultado.textContent = numeroVerdadeiro > 1 ? numeroVerdadeiro : 0;
        caixaAlternativas.textContent = "";
    } else {
        caixaPerguntas.innerHTML = '<a class="clique2" href="https://anabarros-22.github.io/anabarros.2T.3B/">Reiniciar Teste</a> Parabéns pela tentativa. De 10 questões, você acertou: ';
        textoResultado.textContent = 0;
        caixaAlternativas.textContent = "";
    }
}