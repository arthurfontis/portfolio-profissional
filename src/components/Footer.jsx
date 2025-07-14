import './Footer.css'
import React from 'react'

export default props =>

    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
            <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1" aria-label="Bootstrap">
                <img
                    src={require('../assets/imgs/logo-principal-semfundo.png')}
                    alt="Logo"
                    width="70"
                    height="70"
                    className="d-inline-block align-right"
                />
            </a>
            <span class="mb-3 mb-md-0 text-body-secondary">© 2025 Arthur Fontis. Todos os direitos reservados.
            </span>
        </div>
        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">
                <a class="text-body-secondary" href="https://www.tiktok.com/@dev.arthurfontis" aria-label="Tiktok" target='blank'>
                    <i class="fa-brands fa-tiktok"></i>
                </a>
            </li>
            <li class="ms-3">
                <a class="text-body-secondary" href="https://www.instagram.com/dev.arthurfontis/" aria-label="Instagram" target='blank'>
                    <i class="fa-brands fa-instagram"></i>
                </a>
            </li>
            <li class="ms-3">
                <a class="text-body-secondary" href="https://www.linkedin.com/in/arthur-fontinele/" aria-label="Linkedin" target='blank'>
                    <i class="fa-brands fa-linkedin"></i>
                </a>
            </li>
        </ul>
    </footer>