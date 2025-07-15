import React from "react";
import './Main-pj.css'

export default props =>
    <main className="projetos d-flex justify-content-center p-3">
        <div className="card shadow-sm" style={{ width: '15rem' }}>
            <img src={props.imagem} className="card-img-top" alt={props.titulo} />
            <div className="card-body">
                <h5 className="card-title">{props.titulo}</h5>
                <p className="card-text">{props.descricao}</p>
                <div className="d-flex justify-content-between">
                    <a
                        href={props.linkRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-dark"
                    >
                        Repositório
                    </a>
                    <a
                        href={props.linkProjeto}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        Ver Projeto
                    </a>
                </div>
            </div>
        </div>
    </main>