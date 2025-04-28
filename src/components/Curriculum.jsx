import React from 'react';
import { Link } from 'react-router-dom';

export const Curriculum = () => {
  return (
    <div className='page'>

      <h1 className='heading'>Curriculum</h1>

      <section className='curriculum-article'>
        <h2>Proyectos</h2>

        <article>

          <ul>
            <Link  className='article-link' to='/portfolio'>

              <li>Portafolio</li>
              <li>Api Rest para una red social</li>
              <li>Blog personal</li>
              <li>Reproductor de musica</li>
              <li>Pokedex</li>

            </Link>
          </ul>

        </article>

        <h2>Habilidades</h2>
        <ul>
          <h3>Lenguajes de Programacion:</h3>
          <li>Avanzado: JavaScript; Intermedio: Java, Swift.</li>
          <h3>Herramientas de FrameWorks:</h3>
          <li>Avanzado: NodeJs, ExpressJs, ReactJs; Intermedio: SwiftUI.</li>
          <h3>Base de Datos:</h3>
          <li>Avanzado: MariaDB, MySQL, PostgreSQL; Intermedio: MongoDB.</li>
          <h3>Herramientas:</h3>
          <li>Git, API REST, GraphQL, HTML, CSS, Visual Studio Code.</li>
          <h3>Idiomas:</h3>
          <li>Avanzado: Ingles; Nativo: Español.</li>
        </ul>

        <h2>Educacion</h2>
        <ul>
          <h3>Universidad Rafael Belloso Chacin</h3>
          <li>Maracaibo, Venezuela, Ingenieria Informatica, 2022 - Actualidad</li>
        </ul>

        <h2>Certificaciones</h2>
        <ul>
          <li>CTT JavaScript Avanzado - Universidad Rafael Belloso Chacin.</li>
          <li>Master en APIs RESTful con NodeJs - Udemy</li>
          <li>Curso de Swift para Apps iOS - Platzi</li>
          <li>Curso de Bases de Datos con SQL - Platzi</li>
        </ul>


      </section>

    </div>
  )
}
