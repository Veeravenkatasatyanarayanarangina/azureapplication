import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import login from "../../../assets/login.png"
import axios from "axios"
import { baseURL } from "../../../Utils/Api/Api"
import { userDataStore } from "../../../Utils/Utilities/Utilities"
import { getUserData } from "../../../Utils/Utilities/Utilities"
import UserContext from "../../../Utils/Context/UserContext"

const AdminLogin = () => {
  const [valid, setValid] = useState(false)
  const { setIsAuth } = useContext(UserContext)
  const navigate = useNavigate()
  const [admin, setAdmin] = useState({ emailId: "", password: "" })
  const onLogin = (event) => {
    event.preventDefault()
    axios
      .post(`${baseURL}adminlogin`, {
        emailId: admin.emailId,
        password: admin.password,
      })
      .then((response) => {
        userDataStore(response.data)
        setIsAuth(true)
        const adminobj = getUserData()
        return adminobj.emailId === admin.emailId
          ? navigate("/admin/dashboard")
          : setValid(true)
      })
      .catch((error) => {
        navigate("/patientloginf")
      })

    // navigate("/patient")
  }
  const handleChange = (event) => {
    setAdmin({ ...admin, [event.target.name]: event.target.value })
  }
  const [passwordShown, setPasswordShown] = useState(false)

  const toggleAdminLoginPassword = () => {
    setPasswordShown(passwordShown ? false : true)
  }
  return (
    <>
      <section className='doc-login px-2'>
        <div className='container'>
          <div
            className='row d-flex justify-content-center py-5'
            style={{
              border: "1px solid rgba(0,0,0,0.2)",
              borderRadius: "20px",
            }}
          >
            <div className='col-lg-5 col-md-6 col-sm-6 col-12 login-left'>
              <img src={login} className='img-fluid' alt='loginImage' />
            </div>
            <div className='col-lg-5 col-md-6 col-sm-6 col-12 login-right'>
              <div className='p-5'>
                <div className=''>
                  <h2 className='text-center'>
                    <span style={{ color: "#EE6F1B", marginRight: "0.5rem" }}>
                      Admin
                    </span>
                    Login
                  </h2>
                  <form className='mt-4 was-validated' onSubmit={onLogin}>
                    <div className='mb-3'>
                      <label htmlFor='adminEmail' className='form-label'>
                        Email*
                      </label>
                      <input
                        type='email'
                        className='form-control'
                        id='adminEmail'
                        placeholder='Enter Your Email'
                        aria-describedby='emailHelp'
                        name='emailId'
                        onChange={handleChange}
                        pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
                        required
                      />
                      <div className='valid-feedback'>Valid.</div>
                      <div className='invalid-feedback'>
                        Please fill out this field.
                      </div>
                    </div>
                    <div className='mb-3 position-relative'>
                      <label htmlFor='adminPassword' className='form-label'>
                        Password*
                      </label>
                      <input
                        type={passwordShown ? "text" : "password"}
                        className='form-control'
                        placeholder='Enter Your Password'
                        id='adminPassword'
                        name='password'
                        onChange={handleChange}
                        pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                        required
                      />
                     
                      <div className='valid-feedback'>Valid.</div>
                      <div className='invalid-feedback'>
                        Please fill out this field.
                      </div>
                    </div>
                    {valid && (
                      <div>
                        <h6 style={{ color: "#D8000C" }}>
                          {" "}
                          Invalid username Or password{" "}
                        </h6>
                      </div>
                    )}
                    <div className='d-grid  col-6 mx-auto mt-5 mb-3'>
                      <button
                        type='submit'
                        className='btn text-white '
                        style={{
                          backgroundColor: "#EE6F1B",
                          borderColor: "#EE6F1B",
                        }}
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AdminLogin
