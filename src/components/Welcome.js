import React from "react"

const Welcome = () => {
  return (
    <div className='jumbotron'>
      <div className='container py-5'>
        <h1 className='display-4 pb-3'>
          ÜDVÖZLÜNK <span className='text-danger oswald'>ÁLLÁSKERESŐ</span>
        </h1>
        <p className='lead'>
          Örülünk, hogy meglátogattad az oldalunkat! Ha itt vagy, akkor
          feltételezzük, hogy jelenleg munkát keresel külföldön, vagy váltani
          szeretnél. Legyen szó bármelyik alternatíváról, biztosíthatunk, hogy a
          megfelelő helyen jársz!
        </p>
        <hr />
        <p className='lead text-muted'>
          Garantáljuk, hogy ha ránk bízod magad, jó kezekben leszel, úton a
          külföldi munkavállalás vagy váltás irányába!
        </p>

        <a href='/#kapcsolat' role='button'>
          <button className='btn btn-danger px-5 mt-3'>
            <i className='fas fa-sign-in-alt'></i> JELENTKEZÉS
          </button>
        </a>
      </div>
    </div>
  )
}

export default Welcome
