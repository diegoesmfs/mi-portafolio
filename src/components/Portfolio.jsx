import React from 'react';
import { projects } from '../data/projects'

export const Portfolio = () => {



  return (
    <div className='page'>

      <h1 className='heading'>Portafolio</h1>

      {

        projects.map(project => {
          return (
          <article className='projects-portfolio' key={project.id}>
            <br />
            <span>{project.category}</span>
            <h2>{project.name}</h2>
            <h3>{project.technologies}</h3>
            <p>{project.description}</p>
            <a href='/projects/{project.url}'>Documentacion</a>
          </article>
          )
        })

      }

    </div>
  )
}
