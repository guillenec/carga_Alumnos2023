import React from 'react'
import './formulario.css'

const Formulario = () => {
  return (
    <>
      <form className='formAlumno' action=''>
        <section className='sectionCampo'>
          <label htmlFor='name'>Nombre</label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Nombre'
          />
        </section>
        <section className='sectionCampo'>
          <label htmlFor='lastName'>Apellido</label>
          <input
            type='text'
            name='lastName'
            id='lastName'
            placeholder='Apellido'
          />
        </section>
        <section className='sectionCampo'>
          <label htmlFor='dni'>Dni</label>
          <input
            type='number'
            name='dni'
            id='dni'
            placeholder='Dni N°'
          />

        </section>
        <section className='sectionCampoButton'>
          <button className='submitButton' type='submit'>
            Enviar
          </button>
        </section>
      </form>
    </>
  )
}

export default Formulario
