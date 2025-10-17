import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

//obter ano
const getAno = () => {
  const data = new Date();//manipular data e hora
  const ano = data.getFullYear();//obter ano atual
  return ano;
}

const Footer = () => {
  const ano = getAno();
  return (
    <>
        <div>
          <footer>
            <h2 className='bg-info text-center mt-2  position-absolute start-0 end-0'>&copy; {ano} Ética, todos os direitos reservados.</h2>
          </footer>
        </div>
    </>
  )
}

export default Footer