import React from "react"
import ContactForm from "./ContactForm"

const ContactUs = () => {
  return (
    <div
      className='jumbotron kapcsolathover'
      style={{ backgroundColor: "#212121" }}
    >
      <div className='container'>
        <h1 className='display-4 text-danger oswald py-0 px-5'>Kapcsolat</h1>
        <div className='row'>
          <div className='col-md-9 my-auto p-5'>
            <ContactForm />
          </div>
          <div className='col-md-3 text-center my-auto'>
            <hr className='mb-3 mt-3 bg-danger text-center d-none d-sm-block d-md-none' />
            <ul className='list-unstyled mb-0'>
              <li>
                <i className='fas fa-map-marker-alt fa-4x text-danger p-3'></i>
                <p className='lead text-muted'>
                  Székelyudvarhely, Kossuth Lajos utca, 23. szám.
                </p>
              </li>
              <li>
                <i className='fas fa-phone-alt fa-4x text-danger p-3'></i>
                <p className='lead text-muted'>Hamarosan...</p>
              </li>
              <li>
                <i className='fas fa-envelope fa-4x text-danger p-3'></i>
                <p className='lead text-muted'>office@meddison.eu</p>
              </li>
            </ul>
            <hr className='mt-5 bg-danger text-center d-none d-sm-block d-md-none' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
