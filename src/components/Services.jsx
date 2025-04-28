import React from 'react';
import { Link } from 'react-router-dom';

export const Services = () => {
  return (
    <div className='page'>

      <h1 className='heading'>Servicios</h1>

      <section className='services'>

        <Link className='article-link' to='/contact'>

          <article className='service'>
            <h2>Desarrollo Web</h2>
            <p> Creo tu pagina web desde cero</p>
          </article>
          <article className='service'>
            <h2>Optimizacion de Base de datos</h2>
            <p>Mejoro la eficiencia en el procesamiento y almacenamiento de datos</p>
          </article>
          <article className='service'>
            <h2>Diseño Web</h2>
            <p>Hago interfacez intuitivas y amigables para el usuario</p>
          </article>

        </Link>

      </section>

    </div>
  )
}
