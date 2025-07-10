import React from "react";
import './Main-ct.css'

export default props =>

    <main className="contato">
        <h2><i className="fa fa-paper-plane"></i> Entre em Contato</h2>
        <p>Sinta-se à vontade para me chamar pelas redes sociais ou email. Terei o maior prazer em conversar com você!</p>

        <ul className="lista-contato">
            <li>
                <i className="fa fa-envelope"></i>
                <a href="mailto:arthurfontis17@gmail.com">arthurfontis17@gmail.com</a>
            </li>
            <li>
                <i className="fa fa-phone"></i>
                <a href="tel:+5561992002602">+55 (61) 99200-2602</a>
            </li>
            <li>
                <i class="fa-brands fa-linkedin"></i>
                <a href="https://www.linkedin.com/in/arthur-fontinele/" target="_blank" rel="noreferrer">
                    https://www.linkedin.com/in/arthur-fontinele/
                </a>
            </li>
            <li>
                <i class="fa-brands fa-github"></i>
                <a href="https://github.com/arthurfontis" target="_blank" rel="noreferrer">
                    https://github.com/arthurfontis
                </a>
            </li>
        </ul>
    </main>