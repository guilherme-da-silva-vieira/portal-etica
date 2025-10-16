import "bootstrap/dist/css/bootstrap.min.css"
import {Link, NavLink} from "react-router-dom"
import React from 'react'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-info">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Ética</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <NavLink className="nav-link" to="/">Início</NavLink>
                        <NavLink className="nav-link" to="/legislacao">Legislação</NavLink>
                        <NavLink className="nav-link" to="/ia">Ia</NavLink>
                        <NavLink className="nav-link" to="/sobre">Sobre</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar