import React from "react"
import { Bar, Line } from "react-chartjs-2"
import "./analytics.css"
import heartrate from "../../../assets/heartrate.png"
import bloodpressure from "../../../assets/bloodpressure.png"
import body from "../../../assets/body-temperature.jpg"

import { Chart as ChartJS, registerables } from "chart.js"
ChartJS.register(...registerables)

const PatientAnalytics = () => {
  const barstackedchartdata = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],

    datasets: [
      {
        label: "inhale",

        data: [2, 5, 7, 9, 7, 6, 4],

        backgroundColor: "#EE6F1B",
      },

      {
        label: "exhale",

        data: [1, 3, 6, 10, 15, 8, 5],

        backgroundColor: "#ffe8d9",
      },

      {
        label: "counts per minutes",

        data: [4, 5, 9, 1, 6, 3, 5],

        backgroundColor: "rgb(53, 162, 235)",
      },
    ],
  }

  const glucose = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Normal Level",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "#ffe8d9",
      },
      {
        label: "Hypoglycemia",
        data: [33, 25, 35, 51, 54, 76],
        fill: true,
        backgroundColor: "#EE6F1B",
        border: "green",
      },
    ],
  }
  return (
    <>
      <div className='analytics mt-4 '>
        <div className='row g-3'>
          <div className='col-lg-4'>
            <div className='info-box bg-theme-light'>
              <span className='info-box-icon push-bottom mb-3'>
                <img src={bloodpressure} alt='' className='img-fluid mb-3' />
              </span>
              <div className='info-box-content'>
                <span className='info-box-text'>Blood Pressure</span>
                <h4>120/60</h4>
                <div className='progress bg-white'>
                  <div
                    className='progress-bar bg-dark'
                    role='progressbar'
                    style={{ width: "25%" }}
                    aria-valuenow='10'
                    aria-valuemin='0'
                    aria-valuemax='100'
                  ></div>
                </div>
                <span className='progress-description'>
                  20% less than normal
                </span>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='info-box bg-theme-light'>
              <span className='info-box-icon push-bottom'>
                <img src={heartrate} alt='' className='img-fluid mb-4' />
              </span>
              <div className='info-box-content'>
                <span className='info-box-text'>Heart Rate</span>
                {/* <span className='info-box-number'>90</span> */}
                <h4>60.56bhp</h4>
                <div className='progress bg-white'>
                  <div
                    className='progress-bar bg-dark'
                    role='progressbar'
                    style={{ width: "40%" }}
                    aria-valuenow='50'
                    aria-valuemin='0'
                    aria-valuemax='100'
                  ></div>
                </div>
                <span className='progress-description'>
                  20% less than normal
                </span>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='info-box bg-theme-light'>
              <span className='info-box-icon push-bottom'>
                <img src={body} alt='' className='img-fluid mb-4' />
              </span>
              <div className='info-box-content'>
                <span className='info-box-text'>Body Temperature</span>
                <h4>100.4 (38 C)</h4>

                <div className='progress bg-white'>
                  <div
                    className='progress-bar bg-dark'
                    role='progressbar'
                    style={{ width: "10%" }}
                    aria-valuenow='80'
                    aria-valuemin='0'
                    aria-valuemax='100'
                  ></div>
                </div>
                <span className='progress-description'>it's high fever</span>
              </div>
            </div>
          </div>
        </div>
        <div className='row g-3 py-5 '>
          <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
            <div className='card mb-1 p-4'>
              <h4>Respiratory Level</h4>
              <hr />
              <div className='card-body'>
                <Bar
                  data={barstackedchartdata}
                  options={{
                    plugins: {
                      title: {
                        display: true,
                      },
                    },

                    responsive: true,
                  }}
                />
              </div>
            </div>
          </div>

          <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
            <div className='card mb-1 p-4'>
              <h4>Glucose Level</h4>
              <hr />
              <div className='card-body'>
                <Line
                  data={glucose}
                  options={{
                    plugins: {
                      title: {
                        display: true,
                      },
                    },

                    responsive: true,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PatientAnalytics
