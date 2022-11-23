import React, { useState } from "react"

const Payment = () => {
  const [isChecked, setIsChecked] = useState(false)
  const handleOnChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <div className='book_apppointment'>
        <div className='row d-flex justify-content-center my-4'>
          <div className='col-lg-9'>
            <div className='card  shadow'>
              <div className='card-header' style={{ background: "0" }}>
                {" "}
                <h4>
                  <span style={{ color: "#EE6F1B" }}></span>Payments{" "}
                </h4>{" "}
              </div>
              <div className='card-body p-5'>
                <form className='row g-3'>
                  <div className='col-md-12'>
                    <label for='patientName' className='form-label'>
                      Patient Name
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='patientName'
                      name='patientName'
                    />
                  </div>
                  <div className='col-md-12'>
                    <label for='patientId' className='form-label'>
                      Patient Id
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='patientId'
                      name='patientId'
                    />
                  </div>
                  <div className='col-md-12'>
                    <label for='doctorName' className='form-label'>
                      Doctor Name
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='doctorName'
                      name='doctorName'
                    />
                  </div>
                  <div className='col-md-12'>
                    <label for='paymentDate' className='form-label'>
                      Payment Date
                    </label>
                    <input
                      type='email'
                      className='form-control'
                      id='paymentDate'
                      name='paymentDate'
                    />
                  </div>

                  <div className='col-md-12'>
                    <label for='toatalAmount' className='form-label'>
                      Consultation Fee
                    </label>
                    <input
                      type='tel'
                      className='form-control'
                      id='toatalAmount'
                      name='toatalAmount'
                    />
                  </div>

                  <div className='col-md-12'>
                    <label for='Cash' className='form-label'>
                      Cash
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='Cash'
                      name='Cash'
                    />
                  </div>
                  <div className='mb-3 form-check'>
                    <input
                      type='checkbox'
                      onClick={handleOnChange}
                      className='form-check-input'
                      id='exampleCheck1'
                    />
                    <label className='form-check-label' for='exampleCheck1'>
                      Are You Insured
                    </label>

                    {isChecked && (
                      <div className='row mt-3'>
                        <div className='col-lg-12'>
                          <div className='card  shadow'>
                            <div
                              className='card-header'
                              style={{ background: "0" }}
                            >
                              {" "}
                              <h4>
                                <span style={{ color: "#EE6F1B" }}></span>
                                Insurance Details{" "}
                              </h4>{" "}
                            </div>
                            <div className='card-body p-5'>
                              <div className='col-md-12 mb-3'>
                                <label
                                  className='form-label'
                                  for='doctorSpecialization'
                                >
                                  Insurance Company
                                </label>
                                <select
                                  className='form-select'
                                  id='doctorSpecialization'
                                  name='problem'
                                  required
                                >
                                  <option selected>
                                    Select Your Insurance Company
                                  </option>
                                  <option value='Apollo Munich Health Insurance Company'>
                                    Apollo Munich Health Insurance Company
                                  </option>
                                  <option value='Policy Bachat'>
                                    Policy Bachat
                                  </option>
                                  <option value='United India Insurance'>
                                    United India Insurance
                                  </option>
                                  <option value='Care Health Insurancet'>
                                    {" "}
                                    Care Health Insurancet
                                  </option>
                                  <option value='Other'>Other</option>
                                </select>
                              </div>

                              <div className='col-md-12'>
                                <label for='insuranceid' className='form-label'>
                                  Insurence Id
                                </label>
                                <input
                                  type='email'
                                  className='form-control'
                                  id='insuranceid'
                                  name='insuranceid'
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
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
                      Pay
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

export default Payment
