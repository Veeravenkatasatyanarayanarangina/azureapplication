import React from "react"
import "./Home.css"

import hero from "../../assets/hero-img.png"

const HomePage = () => {
  return (
    <>
      <section id='hero' className='d-flex align-items-center'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 aos-init aos-animate'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              <h1>Online Consultation Scheduler</h1>
              <h2>Use our service:</h2>
              <ul className='ps-0'>
                <li>
                  <i className='bi bi-arrow-right-circle-fill me-2'></i>To book
                  an appointment with a doctor
                </li>
                <li>
                  {" "}
                  <i className='bi bi-arrow-right-circle-fill me-2'></i>When
                  your in emergency and you need immediate attention
                </li>
                <li>
                  {" "}
                  <i className='bi bi-arrow-right-circle-fill me-2'></i>Avoid
                  the emergency room for routine emergencies
                </li>
              </ul>
              <div className='d-flex justify-content-center justify-content-lg-start mt-4'>
                <a href='/' className='btn-get-started text-decoration-none'>
                  Contact Us
                </a>
                <a href='/' className=' btn-watch-video'>
                  How it works
                </a>
              </div>
            </div>
            <div
              className='col-lg-6 order-1 order-lg-2 hero-img aos-init aos-animate'
              data-aos='zoom-in'
              data-aos-delay='200'
            >
              <img src={hero} className='img-fluid animated' alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
