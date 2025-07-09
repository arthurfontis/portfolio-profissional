import React from "react";
import './Main.css'

export default props =>
    <main>
        <div class="container py-4">
            <div class="p-4 p-md-5 mb-5 rounded text-body-emphasis bg-body-secondary">
                <div class="col-lg-7 px-2">
                    <h1 class="display-2 fst-italic">Olá, Seja bem vindo ao meu portfólio
                    </h1>
                    <p class="lead my-4">Aqui você poderá descobrir um pouco sobre mim e sobre os projetos que já fiz ou estão em andamento ainda.</p>
                </div>
            </div>
            <div id="box" class="row align-items-md-stretch">
                <div class="col-md-6">
                    <div class="h-100 p-5 text-bg-dark rounded-3">
                        <h2>Change the background</h2> <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
                    </div>
                </div>
                <div id="box" class="col-md-6">
                    <div class="h-100 p-5 bg-body-tertiary border rounded-3">
                        <h2>Add borders</h2>
                        <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                    </div>
                </div>
            </div>
        </div>
    </main>