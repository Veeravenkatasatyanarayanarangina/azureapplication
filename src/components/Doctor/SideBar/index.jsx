import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import UserContext from "../../../Utils/Context/UserContext"
import { getUserData } from "../../../Utils/Utilities/Utilities"
import "./sidebar.css"
import MaleDoc from "../../../assets/MaleDoc.png"
import FemaleDoc from "../../../assets/FemaleDoc.png"

const Sidebar = () => {
  const doctorData = getUserData()
  const { setIsAuth } = useContext(UserContext)
  const onLogout = () => {
    localStorage.clear()
    setIsAuth(false)
  }

  return (
    <>
      <div className='card shadow my-4 sidebar-doc'>
        <div className='card-body p-1'>
          <div className='profile text-center'>
            {doctorData.gender === "female" ? (
              <img
                className='img-fluid  rounded-circle'
                src={FemaleDoc}
                alt='not found'
              />
            ) : (
              <img
                className='img-fluid  rounded-circle'
                src={MaleDoc}
                alt='not found'
              />
            )}

            <div className='my-3'>
              <h4>Dr. {doctorData.firstname}</h4>

              <p className='text-muted'>{doctorData.department}</p>
            </div>
          </div>
          <div className='sidebar-nav'>
            <ul className='nav nav-pill flex-column mb-auto'>
              <li className='nav-item p-1'>
                <NavLink className='nav-link' to='/doctor/dashboard'>
                  <i className='bi bi-house-door-fill m-2'></i> Dashboard
                </NavLink>
              </li>

              <li className='nav-item p-1'>
                <NavLink className='nav-link' to='/doctor/appointmentreq'>
                  <i className='bi bi-calendar-plus m-2'></i> Appointment Queue
                </NavLink>
              </li>

              <li className='nav-item p-1'>
                <NavLink className='nav-link ' to='/doctor/appointment'>
                  <i className='bi bi-card-list m-2'></i> Appointments
                </NavLink>
              </li>
              <li className='nav-item p-1'>
                <NavLink className='nav-link ' to='/doctor/analytics'>
                  <i className='bi bi-bar-chart m-2'></i> Analytics
                </NavLink>
              </li>
              <li className='nav-item p-1'>
                <NavLink className='nav-link ' to='/doctor/profile'>
                  <i className='bi bi-pencil-square m-2'></i> Settings
                </NavLink>
              </li>
              <li className='nav-item p-1'>
                <NavLink className='nav-link ' to='/doctor/ChangePassword'>
                  <i className='bi bi-lock m-2'></i> Change Password
                </NavLink>
              </li>
              <li className='nav-item p-1'>
                <NavLink className='nav-link ' to='/doctor/help'>
                  <i className='bi bi-question-circle m-2'></i> Help
                </NavLink>
              </li>

              <li className='nav-item p-1'>
                <NavLink className='nav-link' to='/' onClick={onLogout}>
                  <i className='bi bi-box-arrow-right m-2'></i> Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
