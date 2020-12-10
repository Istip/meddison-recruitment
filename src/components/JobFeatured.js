import React, { useState } from "react"
import Collapse from "react-bootstrap/Collapse"
import marked from "marked"

const Job = (props) => {
  const [more, setMore] = useState(false)

  const {
    name,
    featuredImage,
    description,
    payment,
    featured,
  } = props.jobs.fields
  const { createdAt } = props.jobs.sys

  const postDescription = marked(description)

  return (
    <>
      {!featured || (
        <div
          className='card mb-3 mx-auto border-danger'
          style={{ maxWidth: "600px" }}
        >
          <h1 className='card-header bg-secondary text-danger p-3 border-danger'>
            KIEMELT!
          </h1>
          <h4 className='card-header bg-danger text-light p-3'>{name}</h4>
          <img
            src={featuredImage.fields.file.url}
            alt={name}
            title={name}
            className='img-fluid'
          />

          <ul className='list-group list-group-flush lead'>
            <li className='list-group-item list-group-item-action pt-4'>
              <h5 className='text-dark'>
                <i className='fas fa-map-marker-alt'></i> Hollandia
              </h5>
            </li>
            <li className='list-group-item list-group-item-action'>
              <i className='fas fa-euro-sign'></i> Nettó{" "}
              <span className='font-weight-bold text-dark'>{payment}</span> € /
              hónap
            </li>
          </ul>

          <button
            className='btn btn-danger btn-sm'
            onClick={() => setMore(!more)}
            aria-controls='example-collapse-text'
            aria-expanded={more}
          >
            {more ? (
              <div className='lead'>
                <i className='fas fa-chevron-up'></i>{" "}
                <span className='font-weight-bold'>ELREJTÉS</span>
              </div>
            ) : (
              <div className='lead'>
                <i className='fas fa-chevron-down'></i>{" "}
                <span className='font-weight-bold'>További információk</span>
              </div>
            )}
          </button>
          <Collapse in={more}>
            <div id='example-collapse-text' className='p-3'>
              <p dangerouslySetInnerHTML={{ __html: postDescription }} />
              <a href='/#kapcsolat' className='btn btn-danger'>
                Jelentkezés
              </a>
            </div>
          </Collapse>
          <div className='card-footer text-muted'>
            Hirdetés frissítve: {createdAt.toLocaleString()}
          </div>
        </div>
      )}
    </>
  )
}

export default Job
