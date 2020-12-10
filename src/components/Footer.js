import React from "react"
import "./Footer.scss"

const Footer = () => {
  return (
    <>
      <footer
        className='text-center jumbotron bg-dark'
        style={{ marginTop: "-8px" }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-md text-left pb-5'>
              <h4 className='pb-2'>Apróbetűs</h4>
              <p className='small'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti dolorum vel quam! Pariatur, deleniti saepe facere eaque
                quis totam dolorum iusto delectus rem fuga sequi, aperiam sed,
                blanditiis enim esse.
              </p>
              <a href='/' className='text-danger small'>
                Adatvédelmi nyilatkozat
              </a>
            </div>
            <div className='col-md align-self-center'>
              <div className='footer-icons'>
                <a href='/' className='pr-3'>
                  <i className='fab fa-facebook-square text-secondary fa-2x'></i>
                </a>
                <a href='/' className='pr-3'>
                  <i className='fab fa-instagram text-secondary fa-2x'></i>
                </a>
                <a href='/' className='pr-3'>
                  <i className='fas fa-envelope text-secondary fa-2x'></i>
                </a>
                <a href='/'>
                  <i className='fas fa-phone-square-alt text-secondary fa-2x'></i>
                </a>
              </div>

              <div className='pt-3'>
                <a className='btn btn-danger btn-sm pr-2' href='/'>
                  Főoldal
                </a>
                <a className='btn btn-danger btn-sm pr-2' href='/#rolunk'>
                  Rólunk
                </a>
                <a className='btn btn-danger btn-sm pr-2' href='/#munkak'>
                  Munkák
                </a>
                <a className='btn btn-danger btn-sm pr-2' href='/#kapcsolat'>
                  Kapcsolat
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <p
        className='text-center lead mb-0 text-light p-2'
        style={{ backgroundColor: "#212121" }}
      >
        Copyright © 2020 -{" "}
        <a href='/' className='text-danger font-weight-bold'>
          Meddison Reqruitment
        </a>
      </p>
    </>
  )
}

export default Footer
