import React from "react"
import "./Carousel.scss"

const Carousel = () => {
  return (
    <div
      id='carouselExampleIndicators'
      className='carousel slide'
      data-ride='carousel'
    >
      <ol className='carousel-indicators'>
        <li
          data-target='#carouselExampleIndicators'
          data-slide-to='0'
          className='active'
        ></li>
        <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
        <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
      </ol>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img
            className='d-block w-100'
            src='https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
            alt='First slide'
          />
          <div className='carousel-caption'>
            <h1 className='text-light display-5'>Stabil munkát keresel?</h1>
            <p className='lead'>Egész pontosan Hollandiában?</p>
          </div>
        </div>
        <div className='carousel-item'>
          <img
            className='d-block w-100'
            src='https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            alt='Second slide'
          />
          <div className='carousel-caption'>
            <h1 className='text-light display-5'>
              Nem tudod kiben bízhatnál meg?
            </h1>
            <p className='lead'>Mi itt vagyunk Neked!</p>
          </div>
        </div>
        <div className='carousel-item'>
          <img
            className='d-block w-100'
            src='https://images.pexels.com/photos/545065/pexels-photo-545065.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            alt='Third slide'
          />
          <div className='carousel-caption'>
            <h1 className='text-light display-5'>
              Nincs lehetőséged befektetni?
            </h1>
            <p className='lead'>Nálunk nem lesz rá szükség!</p>
          </div>
        </div>
      </div>
      <a
        className='carousel-control-prev'
        href='#carouselExampleIndicators'
        role='button'
        data-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
      </a>
      <a
        className='carousel-control-next'
        href='#carouselExampleIndicators'
        role='button'
        data-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
      </a>
    </div>
  )
}

export default Carousel
