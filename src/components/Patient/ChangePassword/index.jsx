import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../../Utils/Api/Api";
import { getUserData, userDataStore } from "../../../Utils/Utilities/Utilities";

const ChangePassword = () => {
  const navigate=useNavigate();
  const profile =getUserData();
  
  const[changePassword,setChangePassword]=useState({
    currentPassword:'',
    newPatientPassword:'',
    confrmPatientPassword:''
  })
 
 const inputChange=(event)=>{
  event.preventDefault();
  setChangePassword({...changePassword,[event.target.name]:event.target.value})
 
  }
  const onPasswordChange=(event)=>{
    event.preventDefault()

    if(profile.password===changePassword.currentPassword)
    {
      if(changePassword.newPatientPassword===changePassword.confrmPatientPassword)
      {
        
        axios.get(baseURL+"patientPasswordChange",{params:{password:changePassword.newPatientPassword,patientId:profile.patientId}})
        .then((response)=>{
          userDataStore(response.data)
         navigate("/patient/viewprofile")
        })
      }
      else{
        console.log("password must same")
      }

    }
    else{
      console.log("password not correct")
    }
  }

  return (
    <>
      <div className="change_password">
        <div className="row d-flex justify-content-center my-4">
          <div className="col-lg-8">
            <div className="card  shadow">
              <div className="card-header" style={{ background: "0" }}>
                {" "}
                <h4>
                  <span style={{ color: "#EE6F1B" }}>Change</span> Password
                </h4>{" "}
              </div>
              <div className="card-body p-5">
                <form className="row g-3" onSubmit={onPasswordChange}>
                  <div className="col-md-12">
                    <label htmlFor="editPatientPassword" className="form-label">
                      Current Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Your Current Password"
                      id="editPatientPassword"
                      name="currentPassword"
                      onChange={inputChange}
                   required />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="newPatientPassword" className="form-label">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Your New Password"
                      id="newPatientPassword"
                      name="newPatientPassword"
                      onChange={inputChange}
                    required/>
                  </div>
                  <div className="col-md-12">
                    <label
                      htmlFor="confrmPatientPassword"
                      className="form-label"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Your Confirm Password"
                      id="confrmPatientPassword"
                      name="confrmPatientPassword"
                      onChange={inputChange}
                    required/>
                  </div>

                  <div className="col-6 d-grid mx-auto mt-5 mb-3">
                    <button
                      type="submit"
                      className="btn text-white"
                      style={{
                        backgroundColor: "#EE6F1B",
                        borderColor: "#EE6F1B",
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
