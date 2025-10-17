import {Link, NavLink} from "react-router-dom"
import React from 'react'
import "bootstrap/dist/js/bootstrap.esm.min.js"

function Navbar() {
    return (
    	<>
			<header>
        		<nav className="navbar navbar-expand-lg bg-info sticky-top">
            	  <div className="container-fluid">
                		<NavLink className="navbar-brand" to="/">Ética</NavLink>
                		<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    		<span className="navbar-toggler-icon"></span>
                		</button>
               	 	<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    	<div className="navbar-nav">
                        	<NavLink className="nav-link" to="/">Início</NavLink>
                        	<NavLink className="nav-link" to="/legislacao">Legislação</NavLink>
                        	<NavLink className="nav-link" to="/ia">IA</NavLink>
                        	<NavLink className="nav-link" to="/sobre">Sobre</NavLink>
                    	</div>
                	</div>
            	  </div>
        	    </nav>
       		<div className="mt-5"></div>
			</header>
       </>
    )
}

export default Navbar
