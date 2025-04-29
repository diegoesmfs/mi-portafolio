import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export const Contact = () => {

  const [formData, setFormData] = useState({

    name: '',
    surname: '',
    email: '',
    motive: ''

  });

  /*const sendMail = (e) =>{

    e.preventDefault();
    emailjs.send('service_wnegdhs', '')

  }
*/
  return (
    <div className='page' mailto='diegoalef1311moralef@gmail.com'>

      <h1 className='heading'>Contacto</h1>

      <div className='contact-container'>

        <form className='contact' >

          <input type="text" name='name' placeholder='Nombre' />
          <input type="text" name='surname' placeholder='Apellido' />
          <input type="text" name='email' placeholder='Email' />
          <textarea name='motive' placeholder='Motivo de contacto'></textarea>
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
