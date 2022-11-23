import React, { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { baseURL } from "../../../Utils/Api/Api"

import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableFooter from "@mui/material/TableFooter"
import TablePagination from "@mui/material/TablePagination"
import * as FileSaver from "file-saver"

import XLSX from "sheetjs-style"

const PatientList = () => {
  const [patientsList, setPatientsList] = useState([])

  useEffect(() => {
    axios
      .get(baseURL + "patientslist")
      .then((response) => {
        let allpatientsData = []

        if (response.data && response.data.length) {
          allpatientsData = response.data
        }

        setPatientsList(allpatientsData)
        // doctorsList = response.data;
        localStorage.setItem("patientsList", JSON.stringify(allpatientsData))
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - patientsList.length) : 0

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"

  const fileExtension = ".xlsx"

  const Headings = [["Name", "Mail", "PhoneNumber", "Gender", "Address"]]

  const tableData = patientsList.map((row) => ({
    name: row.patientName,

    email: row.email,

    phoneno: row.phoneNo,

    gender: row.patient_gender,

    address: row.patientAddress,
  }))

  const exportToCSV = async (fileName) => {
    const ws = XLSX.utils.json_to_sheet(tableData)

    XLSX.utils.sheet_add_aoa(ws, Headings, { originv: "A1" })

    const wb = { Sheets: { data: ws }, SheetNames: ["data"] }

    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" })

    const data = new Blob([excelBuffer], { type: fileType })

    FileSaver.saveAs(data, "patientList" + fileExtension)
  }

  return (
    <>
      <div className='appointment_req mt-4'>
        <div className='card mb-4 '>
          <div className='card-body  d-sm-block'>
            <div className='row '>
              <div className='col-md-12 '>
                <h4 className='pt-3 pb-1'>
                  <span style={{ color: "#EE6F1B" }}>Patients </span>List
                </h4>
              </div>
            </div>
            <div className='d-flex justify-content-end'>
              {patientsList && patientsList.length > 0 ? (
                <button onClick={exportToCSV} className='btn btn-dark'>
                  Export
                </button>
              ) : (
                <button onClick={exportToCSV} className='btn btn-dark' disabled>
                  Export
                </button>
              )}
            </div>
            <div className='table-responsive'>
              <Table
                sx={{ minWidth: 500, marginTop: "10px" }}
                aria-label='custom pagination table'
              >
                <TableHead>
                  <TableRow>
                    <TableCell align='left'>Name</TableCell>
                    <TableCell align='left'> Mail</TableCell>
                    <TableCell align='left'>PhoneNumber</TableCell>
                    <TableCell align='left'>Gender</TableCell>
                    <TableCell align='left'>Address</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? patientsList.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : patientsList
                  ).map((patient) => (
                    <TableRow key={patient.patientId}>
                      <TableCell align='left' scope='row'>
                        {patient.patientName}
                      </TableCell>
                      <TableCell align='left'>{patient.email}</TableCell>
                      <TableCell align='left'>{patient.phoneNo}</TableCell>
                      <TableCell align='left'>
                        {patient.patient_gender}
                      </TableCell>
                      <TableCell align='left'>
                        {patient.patientAddress}
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
                      count={patientsList.length}
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

export default PatientList
