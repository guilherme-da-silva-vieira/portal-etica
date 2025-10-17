import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

const Legislacao = () => {
  return (
	<>
    		<NavBar/>
		<main>
			<h1 className="text-center">Lei Carolina Dieckmann</h1>
			<div className="m-4">	
				<p className="fs-3 text-center"><img src="img/legislacao.jpg" alt="balança e martelo" className="h-auto w-25"/></p>
				<p className="fs-3 m-2 text-justify">Definiu os diferentes tipos de crimes virtuais, entrando em vigor no dia 3 de abril de 2013.</p>
				
			</div>
		</main>
    		<Footer/>
	</>
  )
}

export default Legislacao