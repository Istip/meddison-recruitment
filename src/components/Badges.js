import React from "react"

const Badges = () => {
  return (
    <div className='jumbotron'>
      <div className='container text-center'>
        <div className='row'>
          <div className='col-md'>
            <button
              type='button'
              className='btn btn-outline-secondary rounded-circle p-5'
            >
              <i className='fas fa-user-friends fa-4x'></i>
            </button>
            <h5 className='text-danger pt-3 oswald'>Megbízhatóság</h5>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              optio.
            </p>
          </div>
          <div className='col-md'>
            <button
              type='button'
              className='btn btn-outline-secondary rounded-circle p-5'
            >
              <i className='fas fa-shipping-fast fa-4x'></i>
            </button>
            <h5 className='text-danger pt-3 oswald'>Sebesség</h5>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              optio. Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className='col-md'>
            <button
              type='button'
              className='btn btn-outline-secondary rounded-circle p-5'
            >
              <i className='fas fa-hand-holding-heart fa-4x'></i>
            </button>
            <h5 className='text-danger pt-3 oswald'>Kapcsolat</h5>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              optio. Lorem ipsum dolor sit amet. Lorem, ipsum dolor.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Badges
