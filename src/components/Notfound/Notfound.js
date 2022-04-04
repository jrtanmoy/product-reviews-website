import React from 'react'
import { Link } from 'react-router-dom'
import './Notfound.css'

const NotFound = () => {
  return (
    <section className=''>
      <div className=''>
        <div>
          <h1>
            Oops! The page you're looking for isn't here.
          </h1>
          <p className=''>
            You might have the wrong address, or the page may have moved.
          </p>
          
        </div>
        <div>
          <div className='error-img'>
            <img
              src='https://thumbs.dreamstime.com/b/%C3%B0%C2%BF%C3%B0%C2%B5%C3%B1%E2%80%A1%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B1%C5%93-134036857.jpg'
              alt=''
            />
          </div>
          <span className='around-link'>
          <Link
            to='/'
            className='homepage-link'
          >
            Back to homepage
          </Link>
          </span>
        </div>
      </div>
    </section>
  )
}

export default NotFound
