import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import UserContext from "../../../Utils/Context/UserContext"
import { getUserData } from "../../../Utils/Utilities/Utilities"
import patientImg from "../../../assets/patient-img.png"
import "./sidebar.css"

const Sidebar = () => {
  const { setIsAuth } = useContext(UserContext)
  const patiendData = getUserData()
  const onLogout = () => {
    localStorage.clear()
    setIsAuth(false)
  }
  return (
    <>
      <div className='card shadow my-4 sidebar-patient'>
        <div className='card-body p-1'>
          <div className='profile text-center mt-3'>
            <img
              className=' img-fluid rounded-circle'
              src={patientImg}
              alt='profile'
            />

            <div className='my-3'>
              <h5>{patiendData.patientName}</h5>

              <p>{patiendData.patientAddress}</p>
            </div>
          </div>
          <div className='sidebar-nav'>
            <ul className='nav nav-pill flex-column mb-auto'>
              <li className='nav-item p-1'>
                <NavLink className='nav-link' to='/patient/applyappointment'>
                  <i className='bi bi-calendar-check-fill m-2'></i> Consultation
                </NavLink>
              </li>

              <li className='nav-item p-1'>
                <NavLink className='nav-link ' to='/patient/viewstatus'>
                  <i className='bi bi-list m-2'></i> View Status
                </NavLink>
              </li>
              <li className='nav-item p-1'>
                <NavLink className='nav-link ' to='/patient/doctorList'>
                  <i className='bi bi-list m-2'></i> Doctor List
                </NavLink>
              </li>
              <li className='nav-item p-1'>
                <NavLink className='nav-link ' to='/patient/patientpayment'>
                  <i className='bi bi-wallet2 m-2'></i> Payments
                </NavLink>
              </li>
              <li className='nav-item p-1'>
                <NavLink className='nav-link ' to='/patient/patienthistory'>
                  <i className='bi bi-clock-history m-2'></i> Patient History
                </NavLink>
              </li>
              <li className='nav-item p-1'>
                <NavLink className='nav-link ' to='/patient/analytics'>
                  <i className='bi bi-bar-chart m-2'></i> Analytics
                </NavLink>
              </li>
              <li className='nav-item p-1'>
                <NavLink className='nav-link ' to='/patient/viewprofile'>
                  <i className='bi bi-person m-2'></i> View Profile
                </NavLink>
              </li>
              <li className='nav-item p-1'>
                <NavLink className='nav-link ' to='/patient/profile'>
                  <i className='bi bi-pencil-square m-2'></i> Settings
                </NavLink>
              </li>

              <li className='nav-item p-1'>
                <NavLink className='nav-link ' to='/patient/changepassword'>
                  <i className='bi bi-lock m-2'></i> Change Password
                </NavLink>
              </li>
              <li className='nav-item p-1'>
                <NavLink className='nav-link ' to='/patient/help'>
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
