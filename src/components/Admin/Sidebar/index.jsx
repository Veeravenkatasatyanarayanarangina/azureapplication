import React ,{useContext}from 'react'
import { NavLink } from "react-router-dom";
import { getUserData } from '../../../Utils/Utilities/Utilities';
import UserContext from '../../../Utils/Context/UserContext';
import AdminImage from '../../../assets/Placeholder_Person.jpg';

const Sidebar = () => {
  const adminobj = getUserData();
  const {setIsAuth}= useContext(UserContext)

  const onLogout=()=>
  {
    localStorage.clear()
    setIsAuth(false);


  }
  return (
    <div className="card shadow my-4 sidebar-doc">
        <div className="card-body p-1">
          <div className="profile text-center">
            <img
              className="img-fluid  rounded-circle"
              src={AdminImage}
              alt="not found"
            />

            <div className="my-3">
              <h4>MR {adminobj.lastName} {adminobj.firstName}</h4>

              
            </div>
          </div>
          <div className="sidebar-nav">
            <ul className="nav nav-pill flex-column mb-auto">
              <li className="nav-item p-1">
                <NavLink className="nav-link" to="/admin/dashboard">
                  <i className="bi bi-house-door-fill m-2"></i> Dashboard
                </NavLink>
              </li>

              <li className="nav-item p-1">
                <NavLink className="nav-link" to="/admin/doctorlist">
                  <i className="bi bi-list m-2"></i> Doctor list
                  
                </NavLink>
              </li>
              <li className="nav-item p-1">
                <NavLink className="nav-link" to="/admin/patientlist">
                  <i className="bi bi-list m-2"></i> Patient list
                  
                </NavLink>
              </li>

              <li className="nav-item p-1">
                <NavLink className="nav-link" to="/" onClick={onLogout}>
                  <i className="bi bi-box-arrow-right m-2"></i> Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default Sidebar