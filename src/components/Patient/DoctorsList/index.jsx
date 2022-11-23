import React, { useState, useEffect } from "react"
import axios from "axios"
import { baseURL } from "../../../Utils/Api/Api"
import MaleDoc from "../../../assets/MaleDoc.png"
import FemaleDoc from "../../../assets/FemaleDoc.png"

const DoctorList = () => {
  const [doctorsList, setDoctorsList] = useState([])
  useEffect(() => {
    axios
      .get(baseURL + "doctorslists")
      .then((response) => {
        let alldoctorsdata = []

        if (response.data && response.data.length) {
          alldoctorsdata = response.data
        }

        setDoctorsList(alldoctorsdata)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <>
      <div className='doctors_list mt-4'>
        <div className='row g-3'>
          {doctorsList &&
            doctorsList.map((doctor, index) => {
              return (
                <div className='col-lg-4'>
                  <div className='card'>
                    {doctor.gender === "female" ? (
                      <img
                        className='img-fluid'
                        src={FemaleDoc}
                        alt='not found'
                      />
                    ) : (
                      <img
                        className='img-fluid'
                        src={MaleDoc}
                        alt='not found'
                      />
                    )}
                    <div className='card-body'>
                      <h5 className='card-title'>
                        Dr {doctor.firstname + " " + doctor.lastname}
                      </h5>
                      <p className='card-text'>{doctor.department}</p>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </>
  )
}

export default DoctorList
