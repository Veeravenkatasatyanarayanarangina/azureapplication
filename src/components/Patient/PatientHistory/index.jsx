import React, { useState, useEffect } from "react"
import axios from "axios"
import { baseURL } from "../../../Utils/Api/Api"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableFooter from "@mui/material/TableFooter"
import TablePagination from "@mui/material/TablePagination"
import { getUserData } from "../../../Utils/Utilities/Utilities"

const PatientHistory = () => {
  const currentPatient = getUserData()
  const id = currentPatient.patientId
  const [appiontmentstatus, setappiontmentstatus] = useState([])

  useEffect(() => {
    axios
      .get(`${baseURL}showStatus`, { params: { id: id } })
      .then((response) => {
        let viewData = []

        viewData = response.data

        setappiontmentstatus(viewData)
      })
      .catch((error) => console.error(`Error:${error}`))
  }, [])

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - appiontmentstatus.length)
      : 0

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }
  return (
    <>
      <div className='view_status mt-4 '>
        <div className='card mb-4 '>
          <div className='card-body  d-sm-block'>
            <div className='row '>
              <div className='col-md-12 '>
                <h4 className='pt-3 pb-4 '>
                  <span style={{ color: "#EE6F1B" }}>Patient</span> History{" "}
                </h4>
              </div>
            </div>
            <div className='table-responsive'>
              <Table
                sx={{ minWidth: 500 }}
                aria-label='custom pagination table'
              >
                <TableHead>
                  <TableRow>
                    <TableCell align='left'>Patient Name</TableCell>
                    <TableCell align='left'>Doctor Name</TableCell>
                    <TableCell align='left'>Disease</TableCell>
                    <TableCell align='left'>Dr PhoneNumber</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? appiontmentstatus.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : appiontmentstatus
                  ).map((appointment) => (
                    <TableRow>
                      <TableCell align='left'>
                        {appointment.patientName}
                      </TableCell>
                      <TableCell align='left'>
                        {appointment.doctorName ? (
                          appointment.doctorName
                        ) : (
                          <>-</>
                        )}
                      </TableCell>
                      <TableCell align='left'>{appointment.problem}</TableCell>
                      <TableCell align='left'>
                        {appointment.doctorPhoneNo ? (
                          appointment.doctorPhoneNo
                        ) : (
                          <>-</>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}

                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      rowsPerPageOptions={[
                        5,
                        10,
                        25,
                        { label: "All", value: -1 },
                      ]}
                      count={appiontmentstatus.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      SelectProps={{
                        inputProps: {
                          "aria-label": "rows per page",
                        },
                        native: true,
                      }}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PatientHistory
