import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { baseURL } from "../../../Utils/Api/Api"
import { getUserData } from "../../../Utils/Utilities/Utilities"
import { userDataStore } from "../../../Utils/Utilities/Utilities"

const Profile = () => {
  const Profile = getUserData()

  const navigate = useNavigate()
  const [editPatient, setEditPatient] = useState({
    patientId: Profile.patientId,
    patientName: Profile.patientName,
    email: Profile.email,
    phoneNo: Profile.phoneNo,
    patient_age: Profile.patient_age,
    patientAddress: Profile.patientAddress,
  })

  const inputChange = (event) => {
    setEditPatient({ ...editPatient, [event.target.name]: event.target.value })
  }

  const onUpdate = (event) => {
    event.preventDefault()

    axios.post(baseURL + "upadatePatient", editPatient).then((response) => {
      if (response.data != null) {
        userDataStore(response.data)

        navigate("/patient/viewprofile")
      } else {
        console.log("failed to update")
      }
    })
  }

  return (
    <>
      <div className='edit_profile'>
        <div className='row d-flex justify-content-center my-4'>
          <div className='col-lg-9'>
            <div className='card  shadow'>
              <div className='card-header' style={{ background: "0" }}>
                {" "}
                <h4>
                  <span style={{ color: "#EE6F1B" }}>Edit</span> Profile
                </h4>{" "}
              </div>
              <div className='card-body p-5'>
                <form className='row g-3' onSubmit={onUpdate}>
                  <div className='col-md-6'>
                    <label for='ePatientName' className='form-label'>
                      Name
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='patientName'
                      value={editPatient.patientName}
                      onInput={inputChange}
                      name='patientName'
                    />
                  </div>
                  <div className='col-md-6'>
                    <label for='ePatientEmail' className='form-label'>
                      Email
                    </label>
                    <input
                      type='email'
                      className='form-control'
                      id='ePatientEmail'
                      value={editPatient.email}
                      onInput={inputChange}
                      name='email'
                    />
                  </div>

                  <div className='col-md-6'>
                    <label for='ePatientMobileNo' className='form-label'>
                      Mobile no
                    </label>
                    <input
                      type='tel'
                      className='form-control'
                      id='ePatientMobileNo'
                      placeholder='enter mobile no'
                      value={editPatient.phoneNo}
                      onInput={inputChange}
                      name='phoneNo'
                    />
                  </div>
                  <div className='col-md-6'>
                    <label for='ePatientAge' className='form-label'>
                      Age
                    </label>
                    <input
                      type='tel'
                      className='form-control'
                      id='ePatientAge'
                      placeholder='1234 Main St'
                      value={editPatient.patient_age}
                      onInput={inputChange}
                      name='patient_age'
                    />
                  </div>

                  <div className='col-md-12'>
                    <label htmlFor='eAddress' className='form-label'>
                      {" "}
                      Address
                    </label>
                    <textarea
                      className='form-control'
                      placeholder='Enter Your Address'
                      name='patientAddress'
                      value={editPatient.patientAddress}
                      onInput={inputChange}
                      id='eAddress'
                    ></textarea>
                  </div>

                  <div className='col-6 d-grid mx-auto mt-5 mb-3'>
                    <button
                      type='submit'
                      className='btn text-white'
                      style={{
                        backgroundColor: "#EE6F1B",
                        borderColor: "#EE6F1B",
                      }}
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
