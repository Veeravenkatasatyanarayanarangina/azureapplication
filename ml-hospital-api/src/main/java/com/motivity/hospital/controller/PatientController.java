package com.motivity.hospital.controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import com.motivity.hospital.models.Patients;
import com.motivity.hospital.repository.PatientRepo;
import com.motivity.hospital.service.PatientsService;

//@CrossOrigin("https://happy-smoke-03815a810.2.azurestaticapps.net/")
@CrossOrigin("http://localhost:3000/")
@RestController
public class PatientController {
	
	@Autowired
	private PatientsService patientsService;
	@Autowired
	private PatientRepo patientRepo;
	
	ModelAndView mv=new ModelAndView();
	@PostMapping("/patientRegister")
    public String patientRegister(@RequestBody Patients patients)
    {
        Patients patient = patientRepo.save(patients);
        if(patient==null)
        {
            return "failed";
        }
        else
        {
            return "success";
        }
        
    }
	
	@PostMapping("/patientlogin")
    public Patients patientLogin(@RequestBody Patients patient)
    {
        Patients pd=patientRepo.loginPatient(patient.getEmail(), patient.getPassword());
        
        return pd;
    }
	@GetMapping("/patientslist")
	public List<Patients> getPatients()
	{
		return patientsService.findpatients();
	}
	@PostMapping("upadatePatient")
    public Patients upadatePatient(@RequestBody Patients patients)
    {
        int result=patientRepo.updatePatient(patients.getPatientName(),patients.getEmail(), patients.getPhoneNo(), patients.getPatient_age(),patients.getPatientAddress(), patients.getPatientId());
        
        if(result==1)
        {
            return patientRepo.findById(patients.getPatientId()).get();
        }
        else {
            return patients;
        }
        
    }
	@GetMapping("/patientPasswordChange")
    public Patients ChangePassword(@RequestParam(name = "password") String password,@RequestParam(name="patientId") int patientId)
    {
        
        int result=patientRepo.changePatientPassword(password, patientId);
        if(result==1)
        {
            return patientRepo.findById(patientId).get();
        }
        else {
            return null;
        }
        
        
    }
}
