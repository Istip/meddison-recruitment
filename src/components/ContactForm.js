import React from "react"

const ContactForm = () => {
  return (
    <>
      <form>
        <div className='container'>
          <div className='form-group'>
            <label htmlFor='name' className='text-white lead'>
              Név: <span className='text-danger font-weight-bold'>*</span>
            </label>
            <input
              type='text'
              name='name'
              className='form-control '
              id='name'
              placeholder='Teljes neved...'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='phone' className='text-white lead pt-3'>
              Telefonszám:{" "}
              <span className='text-danger font-weight-bold'>*</span>
            </label>
            <input
              type='number'
              name='phone'
              className='form-control '
              id='phone'
              placeholder='Pontos telefonszámod...'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='email' className='text-white lead pt-3'>
              Email: <span className='text-danger font-weight-bold'>*</span>
            </label>
            <input
              type='mail'
              name='email'
              className='form-control '
              id='email'
              placeholder='Email elérhetőséged...'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='message' className='text-white lead pt-3'>
              Üzenet: <span className='text-danger font-weight-bold'>*</span>
            </label>
            <textarea
              className='form-control '
              id='message'
              rows='6'
              placeholder='Üzeneted hozzánk...'
            ></textarea>
          </div>

          <p>
            <span className='text-danger font-weight-bold'>*</span> -al jelzett
            mezők kitöltése kötelező!
          </p>

          <button type='submit' className='btn btn-danger px-5 mt-3'>
            <i className='fas fa-paper-plane'></i> ELKÜLD
          </button>
        </div>
      </form>
    </>
  )
}

export default ContactForm
