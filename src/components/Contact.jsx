import React from 'react';
import { Link } from 'react-router-dom';

export const Contact = () => {
  return (
    <div className='page'>

      <h1 className='heading'>Contacto</h1>

      <div className='contact-container'>

        <form className='contact' action="mailto:diegoalef1311moralef@gmail.com">

          <input type="text" placeholder='Nombre' />
          <input type="text" placeholder='Apellido' />
          <input type="text" placeholder='Email' />
          <textarea placeholder='Motivo de contacto'></textarea>
          <input type="submit" value="Enviar" />

        </form>

        <aside className='social-media'>

          <h2>Mis redes sociales</h2>

          <div className='social-logo'>

            <Link className='social-btn' to='https://www.linkedin.com/in/diego-morales-16723133b/'><img src="/bucket/linkedin-logo.jpg" alt="Logo de linkedIn" /></Link>
            <Link className='social-btn' to='https://github.com/diegoesmfs'><img src="/bucket/github-logo.jpg" alt="Logo de GitHub" /></Link>

          </div>

        </aside>

      </div>

    </div>
  )
}
