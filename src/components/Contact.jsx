import React from 'react'

export const Contact = () => {
  return (
    <div className='page'>

    <h1 className='heading'>Contacto</h1>

      <form className='contact' action="mailto:diegoalef1311moralef@gmail.com">

        <input type="text" placeholder='Nombre' />
        <input type="text" placeholder='Apellido' />
        <input type="text" placeholder='Email' />
        <textarea placeholder='Motivo de contacto'></textarea>
        <input type="submit" value="Enviar" />

      </form>

  </div>
  )
}
