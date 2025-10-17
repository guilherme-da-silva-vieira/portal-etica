import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
  return (
    <>
        <Navbar/>
	<main>
		<h1 className="text-center text-decoration-underline mt-4">Conheça a Ética na Tecnologia da Informação</h1>
		<p className="fs-3 m-5 text-justify">Desde 15 de julho de 2013, a Sociedade Brasileira de Computação, definiu o código de ética do profissional de informática que consiste em 12 artigos definindos os deveres desse 			profissional.</p>
		<p className="fs-3 text-center"><img src="/img/home.jpg" className="h-auto w-75" loading="lazy" alt="pessoa no computador"/></p>
		<div className="text-justify">
		<ul className="fs-3 m-5">
			<li className="fs-2">Artigo 1</li>
			<p className="fs-3">Contribuir para o bem-estar social, promovendo, sempre que possível, a inclusão de todos setores da sociedade.</p>
			<p className="fs-3"><span className="text-decoration-underline">Explicação:</span> Sempre que possível, ajudar os outros por meio da tecnolgia.</p>
			<li className="fs-2">Artigo 2</li>
			<p className="fs-3">Exercer o trabalho profissional com responsabilidade, dedicação, honestidade e
			justiça, buscando sempre a melhor solução.</p>
			<p className="fs-3"></p>
			<li className="fs-2">Artigo 3</li>
			<p className="fs-3">Esforçar-se para adquirir continuamente competência técnica e profissional,
			mantendo-se sempre atualizado com os avanços da profissão.</p>
			<p className="fs-3"><span className="text-decoration-underline">Explicação:</span> Sempre estar aprendendo o uso de novas tecnologias pois na informática tem uma mudança rápida, principalmente relacionado à 				segurança da informação.</p>
			<li className="fs-2">Artigo 4</li>
			<p className="fs-3">Atuar dentro dos limites de sua competência profissional e orientar-se por
			elevado espírito público.</p>
			<p className="fs-3"><span className="text-decoration-underline">Explicação:</span> Não tentar acessar os dados dos outros.</p>
			<li className="fs-2">Artigo 5</li>
			<p className="fs-3">Guardar sigilo profissional das informações a que tiver acesso em decorrência
			das atividades exercidas.</p>
			<p className="fs-3"><span className="text-decoration-underline">Explicação:</span> Nunca disponibilizar informações sigilosas para os outros.</p>
			<li className="fs-2">Artigo 6</li>
			<p className="fs-3">Conduzir as atividades profissionais sem discriminação, seja de raça, sexo,
			religião, nacionalidade, cor da pele, idade, estado civil ou qualquer outra condição
			humana.</p>
			<p className="fs-3"><span className="text-decoration-underline">Explicação:</span>Nunca ser preconceituoso com os outros.</p>
			<li className="fs-3">Artigo 7:</li>
			<p className="fs-3">Respeitar a legislação vigente, o interesse social e os direitos de terceiros.</p>
			<p className="fs-3"><span className="text-decoration-underline">Explicação:</span> Sempre cumprir as leis de onde está.</p>
			<li className="fs-2">Artigo 8:</li>
			<p className="fs-3">Honrar compromissos, contratos, termos de responsabilidade, direitos de propriedade, copyrights e patentes.</p>
			<p className="fs-3"><span className="text-decoration-underline">Explicação:</span> Sempre ser resposável na parte jurídica.</p>
			<li className="fs-2">Artigo 9:</li>
			<p className="fs-3">Pautar sua relação com os colegas de profissão nos princípios de consideração,
			respeito, apreço, solidariedade e da harmonia da classe.</p>
			<p className="fs-3"><span class="text-decoration-underline">Explicação:</span> Respeitar os outros porfissionais de informática que trabalham junto com você.</p>
			<li className="fs-2">Artigo 10:</li>
			<p className="fs-3">Não praticar atos que possam comprometer a honra, a dignidade, privacidade
			de qualquer pessoa.</p>
			<p className="fs-3"><span class="text-decoration-underline">Explicação:</span> Não prejudicar ninguém utilizando seus conhecimentos de informática.</p>
			<li className="fs-2">Artigo 11:</li>
			<p className="fs-3">Nunca apropriar-se de trabalho intelectual, iniciativas ou soluções encontradas
			por outras pessoas.</p>
			<p className="fs-3"><span className="text-decoration-underline">Explicação:</span> Não é permitido plágio em nenhuma situação.</p>
			<li className="fs-2">Artigo 12:</li>
			<p className="fs-3">Zelar pelo cumprimento deste código.</p>
			<p className="fs-3"><span className="text-decoration-underline">Explicação:</span> Respeitar todo os artigos anteriores.</p>
		</ul>
		</div>
	</main>
        <Footer/>
    </>
  )
}

export default Home