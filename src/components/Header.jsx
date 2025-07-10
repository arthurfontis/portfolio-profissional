import './Header.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div class="col-md-3 mb-2 mb-md-0">
            <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
                <img
                    src={require('../assets/imgs/logo-principal-semfundo.png')}
                    alt="Logo"
                    width="170"
                    height="145"
                    className="d-inline-block align-right"
                />
            </a>
        </div>
        <ul class="nav col-12 col-md-auto mb-2 justify-content-center flex-grow-1 mb-md-0">
            <li>
                <Link className="nav-link px-2" id="link" to="/">Início</Link>
            </li>
            <li>
                <Link className="nav-link px-2" id="link" to="/sobre">Sobre Mim</Link>
            </li>
            <li>
                <Link className="nav-link px-2" id="link" to="/projetos">Projetos</Link>
            </li>
            <li>
                <Link className="nav-link px-2" id="link" to="/contato">Contato</Link>
            </li>
        </ul>
        <div class="col-md-3 text-end">
        </div>
    </header>
