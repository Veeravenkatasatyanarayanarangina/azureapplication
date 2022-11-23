import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './SideBar'
const Patient = () => {
  return (
    <>
    <section>
     <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-4 col-sm-12 col-12'>
            <Sidebar/>
          </div>
          <div className='col-lg-9 col-md-8 col-sm-12 col-12'>
            <Outlet />
          </div>
        </div>
      </div>
    </section>
 

  </>
  )
}
 export default Patient