import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'

const artigo = () => {
	const conteudos = [
	{"id":0,"mensagem":"O vídeo acima apresenta o Guilherme da Silva Vieira fazendo malabarismo, mesmo não sendo ele, este tipo de vídeo é chamado de deepfake;"},
	{"id":1,"mensagem":"Deepfake é a síntese de imagens ou até mesmo sons humanos gerados por inteligência artificial;"},
	{"id":2,"mensagem":"Sendo algo bastante preocupante pois pode ser usado por exemplo para a disseminação de notícias falsas durante os períodos eleitorais;"},
	{"id":3,"mensagem":`Além disso, também pode ser utilizados para gerar vídeos íntimos falsos, por exemplo na Coreia do Sul, os vídeos falsos estavam sendo enviados para a plataforma de mensagens Telegram, atualmente
	a Polícia Nacional da Coreia do Sul está investigando sobre o assunto;`},
	{"id":4,"mensagem":`Outro Exemplo seriam os chatbots que se autointitulam "Deus" e "Jesus", o principais riscos destes chatbots é que pode ser utilizados para manipular questões de fé, política e financeira.`}];
	return conteudos;
}

const IA = () => {
  const topicos = artigo(); 
  return (
    <>
        <NavBar/>
	<h1 className="text-center text-decoration-underline">Inteligência Artificial</h1>
	<div className="text-center">
		<video controls width="250">
			<source src="/videos/malabarismo.mp4" type="video/mp4" />
		</video>
		<ul className="list-group w-25 m-auto">
			{topicos.map(topico => <li key={topico.id} className="list-group-item text-justify">{topico.mensagem}</li>)}
		</ul>
	</div>
        <Footer/>
    </>
  )
}

export default IA