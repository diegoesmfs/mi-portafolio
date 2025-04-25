import React from 'react';
import {Link} from 'react-router-dom';

export const Home = () => {
  return (
    <div>

      <h1>
        Soy estudiante de ingenieria informatica, resido en Venezuela
        ofrezco mis servicios de programacion y desarrollo web utilizando 
        diversas herramientas y metodos para optimizar la web, hacer interfacez
        intuitivas y aplicaciones mantenibles y escalables.
      </h1>

      <h2>
        Mis trabajos y desarrollos, son dinamicos, dando una mayor visibilidad y
        intuitividad a las interfacez que desarrollo <Link to="/contact">Contacta conmigo!!!</Link>.
      </h2>

      <section className='header-projects'>
        <h2>Estos son parte de los proyectos que he desarrollado.</h2>
        <div className='projects'>

        </div>
      </section>

    </div>
  )
}
