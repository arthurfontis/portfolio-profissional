import React from "react";
import './Main-hm.css'


export default props =>
    <main>
        <div class="container py-4 home">
            <div class="p-4 p-md-5 mb-5 rounded text-body-emphasis bg-body-secondary">
                <div class="col-lg-7 px-2">
                    <h1 class="display-2 fst-italic">Olá, Seja bem vindo ao meu portfólio
                    </h1>
                    <p class="lead my-4">Aqui você poderá descobrir um pouco sobre mim e sobre os projetos que já fiz ou estão em andamento ainda.</p>
                </div>
            </div>
            <div id="box" class="row align-items-md-stretch">
                <div class="col-md-6">
                    <div class="h-100 p-5 rounded-3" id="box-one">
                        <h2>Quem sou eu?</h2> <p>Sou desenvolvedor apaixonado por tecnologia e inovação. Neste portfólio, você encontrará alguns dos meus projetos, habilidades e um pouco da minha trajetória.</p>
                    </div>
                </div>
                <div id="box" class="col-md-6">
                    <div class="h-100 p-5 border rounded-3" id="box-two">
                        <h2>O que você vai ver aqui?</h2>
                        <p>Veja meus projetos, descubra minhas habilidades com front-end e back-end, e conheça formas de entrar em contato comigo para parcerias ou oportunidades.</p>
                    </div>
                </div>
            </div>
        </div>
    </main>