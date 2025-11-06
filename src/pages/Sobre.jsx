import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'

function Sobre() {
  return (
    <>
        <NavBar/>
		<h1 className="text-center text-decoration-underline">Sobre o WebSite</h1>
		<div class="accordion w-50 m-auto" id="sobre">
  		<div class="accordion-item">
    			<h2 class="accordion-header">
      				<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#alunoPesquisador" aria-expanded="false" aria-controls="alunoPesquisador">
        				Aluno pesquisador
      				</button>
    			</h2>
    			<div id="alunoPesquisador" class="accordion-collapse collapse" data-bs-parent="#sobre">
      				<div class="accordion-body"><strong>Guilherme da Silva Vieira</strong></div>
   		 	</div>
  		</div>
  		<div class="accordion-item">
    			<h2 class="accordion-header">
      				<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#noticias" aria-expanded="false" aria-controls="noticias">
       		 			Noticias
      				</button>
   			 </h2>
    			<div id="noticias" class="accordion-collapse collapse" data-bs-parent="#sobre">
      				<div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item’s accordion body. Let’s imagine this being filled with some actual content.</div>
    		</div>
  	</div>
	<div class="accordion-item">
    		<h2 class="accordion-header">
      			<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#imagens" aria-expanded="false" aria-controls="imagens">
        			Imagens
      			</button>
    		</h2>
    		<div id="imagens" class="accordion-collapse collapse" data-bs-parent="sobre">
      				<div class="accordion-body"><strong>Guilherme da Silva Vieira</strong></div>
   		 </div>
  	</div>
</div>

	<Footer/>
    </>
  )
}

export default Sobre