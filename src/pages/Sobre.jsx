import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'

function Sobre() {
  return (
    <>
        <NavBar/>
		<h1 className="text-center text-decoration-underline">Sobre o WebSite</h1>
		<div className="accordion w-50 m-auto" id="sobre">
  		<div className="accordion-item">
    			<h2 className="accordion-header">
      				<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#alunoPesquisador" aria-expanded="false" aria-controls="alunoPesquisador">
        				Aluno pesquisador
      				</button>
    			</h2>
    			<div id="alunoPesquisador" className="accordion-collapse collapse" data-bs-parent="#sobre">
      				<div class="accordion-body"><strong>Guilherme da Silva Vieira</strong></div>
   		 	</div>
  		</div>
  		<div className="accordion-item">
    			<h2 class="accordion-header">
      				<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#noticias" aria-expanded="false" aria-controls="noticias">
       		 			Noticias
      				</button>
   			 </h2>
    			<div id="noticias" className="accordion-collapse collapse" data-bs-parent="#sobre">
      				<div className="accordion-body">
					<ul type="square">
						<li><a href="https://www.dw.com/en/south-korea-launches-telegram-deepfake-porn-probe/a-70107568" target="_blank" className="text-info">DW in English</a></li>
						<li><a href="https://www.dw.com/pt-br/jesus-de-bolso-o-dilema-%C3%A9tico-de-chatbots-de-ia-religiosos/a-74075386" target="_blank" className="text-info">DW Brasil</a></li>
					</ul>
				</div>
			</div>
    		</div>
			<div className="accordion-item">
    		<h2 className="accordion-header">
      			<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#imagens" aria-expanded="false" aria-controls="imagens">
        			Imagens
      			</button>
    		</h2>
    		<div id="imagens" className="accordion-collapse collapse" data-bs-parent="sobre">
      				<div className="accordion-body">
					<ul type="cricle">
						<li><a href="https://www.pexels.com/pt-br/foto/colher-empresaria-digitando-no-laptop-na-mesa-da-rua-5239712/" target="_blank" className="text-info">1ª imagem;</a></li>
						<li><a href="https://www.pexels.com/pt-br/foto/mesa-de-juizes-com-martelo-e-escalas-5669619/" target="_blank" className="text-info">2ª imagem.</a></li>
					</ul>
				</div>
   		</div>
	</div>
  	</div>
	<div className="position-absolute bottom-0 start-0 end-0">
		<Footer/>
	</div>
    </>
  )
}

export default Sobre