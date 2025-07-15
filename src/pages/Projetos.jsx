import React from "react";
import Main from "../components/Main-pj";
import Projeto from '../components/Main-pj';

import quizCard from '../assets/imgs/quiz_card_resized.png'
import jogoMemoria from '../assets/imgs/jogo_memoria_card_resized.png'
import calculadora from '../assets/imgs/calculadora_card_resized.png'
import flappy from '../assets/imgs/tela-flappy.png'

export default () =>
    <div className="container py-4">
        <div className="d-flex flex-wrap gap-4 justify-content-center">
            <Projeto
                imagem={quizCard}
                titulo="Quiz Interativo"
                descricao="Teste seus conhecimentos com esse quiz dinâmico. As perguntas são de múltipla escolha com feedback imediato."
                linkRepo="https://github.com/arthurfontis/quiz-interativo"
                linkProjeto="https://arthurfontis.github.io/quiz-interativo"
            />
            <Projeto
                imagem={jogoMemoria}
                titulo="Jogo da Memória"
                descricao="Treine sua memória com esse jogo interativo. Combine os pares de cartas com o menor número de jogadas possível."
                linkRepo="https://github.com/arthurfontis/jogo-da-memoria"
                linkProjeto="https://arthurfontis.github.io/jogo-da-memoria"
            />
            <Projeto
                imagem={calculadora}
                titulo="Calculadora Simples"
                descricao="Uma calculadora funcional desenvolvida com React, permitindo realizar operações básicas como soma, subtração, multiplicação e divisão."
                linkRepo="https://github.com/arthurfontis/calculadora"
                linkProjeto="https://arthurfontis.github.io/calculadora"
            />
            <Projeto
                imagem={flappy}
                titulo="Flappy Bird Clone"
                descricao="Um clone do clássico Flappy Bird desenvolvido apenas com HTML, CSS e JavaScript puro. O jogo utiliza manipulação direta do DOM para criar obstáculos, colisões e animações."
                linkRepo="https://github.com/arthurfontis/flappyBird"
                linkProjeto="https://arthurfontis.github.io/flappyBird"
            />
        </div>
    </div>