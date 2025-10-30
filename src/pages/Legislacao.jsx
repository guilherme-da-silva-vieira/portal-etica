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
				<p className="fs-3 m-auto text-justify">Definiu os diferentes tipos de crimes virtuais, entrando em vigor no dia 3 de abril de 2013.</p>
				<div className="row g-2">
					<div className="col-md-6 col-12">
						<div className="card">
							<div className="card-header text-center">
								<span className="fs-3">Sobre a Lei</span>
							</div>
							<div className="card-body">
								<ol type="i" className="fs-4 text-justify">
									<li>Foi adicionado os artigos 154-A e 154-B, sendo "invasão de dispositivo informático";</li>
									<li>Foi inserido ao parágrafo 1° ao artigo 266, que inclui no tipo penal quando há a interrupção de serviço telemático ou de informação de utilidade
									pública.</li>
									<li>Também foi colocado um parárafo único do artigo 298, que considera o cartão de crédito ou débito como um documento particular no crime de falsificação.</li>
								</ol>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-12">
						<div className="card">
							<div className="card-header text-center">
								<span className="fs-3">Penalidades</span>
							</div>
							<div className="card-body">
								<ol type="i" className="fs-4 text-justify">
									<li>Caput: invasão de dispositivo informático, podendo produzir, oferecer, distribuir, vender ou difundir dispositivo ou programa de computador que permita
									a invasão do caput. A pena é de detenção de 3(três) meses e 1(um) ano, incluindo multa;</li>
									<li>Se houver prejuízos financeiros: pode aumentar de 1/6 até um 1/3;</li>
									<li>Se ocorrer a obtenção de informação de comunição eletrônica privada, segredos comerciais ou industriais, sendo informações sigilosas: Reclusão de 6(seis) 										meses a 2(dois) anos, e multa(se não for mais grave).</li>
									<li>Se for divulgado, vendido e transmitido os dados ou informações obtidos: aumenta de 1/3 até 2/3;</li>
									<li>Se praticada contra o Presidente da República, do Supremo Tribunal Federal(STF) ou contra Membro do Congresso Nacional(Senado e Câmara de Deputados): 										Aumenta de  1/3 até 1/2.</li>
								</ol>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-12">
						<div className="card">
							<div className="card-header text-center">
								<span className="fs-3">Pontos positivos:</span>
							</div>
							<div className="card-body">
								<ol type="i" className="fs-4 text-justify">
									<li>Ajudou a definir crimes cibernéticos</li>
									<li>A lei foi chamada de "Lei Carolina Dieckmann" pois foi feito para evitar o que ocorreu com a atriz, onde seu computador foi hackeado com imagens intímas
									sendo vazadas na internet;</li>
									<li>Moderniza a definição de documentos pessoais.</li>
								</ol>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-12">
						<div className="card">
							<div className="card-header text-center">
								<span className="fs-3">Pontos Negativos:</span>
							</div>
							<div className="card-body">
								<ol type="i" className="fs-4 text-justify">
									<li>A lei é considerada somente se for utilizada alguma falha de segurança no sistema informático(por exemplo um computador sem senha não se enquadraria);</li>
									<li>A baixa penalidade para esses crimes;</li>
									<li>Complexidade de investigação.</li>
								</ol>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-12">
						<div className="card">
							<div className="card-header text-center">
								<span className="fs-3">Outras Leis:</span>
							</div>
							<div className="card-body">
								<ol type="i" className="fs-4 text-justify">
									<li>Marco Civil da Internet(2014);</li>
									<li>Lei Geral de Proteção de Dados/LGPD(2019).</li>
								</ol>
							</div>
						</div>
					</div>	
				</div>
			</div>
		</main>
    		<Footer/>
	</>
  )
}

export default Legislacao