import './Header.css'
import React from 'react'

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
                <a href="#" class="nav-link px-2 " id='link'>Início</a>
            </li>
            <li>
                <a href="#" class="nav-link px-2 " id='link'>Sobre Mim</a>
            </li>
            <li>
                <a href="#" id='link' class="nav-link px-2 ">Projetos</a>
            </li>
            <li>
                <a href="#" id='link' class="nav-link px-2 ">Contato</a>
            </li>
            <li>
                <a href="#" id='link' class="nav-link px-2 ">About</a>
            </li>
        </ul>
        <div class="col-md-3 text-end">
        </div>
    </header>
