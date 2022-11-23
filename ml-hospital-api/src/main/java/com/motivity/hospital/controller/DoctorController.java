package com.motivity.hospital.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.motivity.hospital.models.Appointments;
import com.motivity.hospital.models.Doctors;
import com.motivity.hospital.repository.AppointmentsRepo;
import com.motivity.hospital.repository.DoctorRepo;
import com.motivity.hospital.service.DoctorService;

//@CrossOrigin("https://happy-smoke-03815a810.2.azurestaticapps.net/")

@CrossOrigin("http://localhost:3000/")
@RestController
public class DoctorController {
	@Autowired
	private DoctorRepo doctorRepo;
	@Autowired
	private HttpSession session;
	@Autowired
	private DoctorService doctorService;
	@PostMapping("doctorRegistration")
    String registerDoctor(@RequestBody Doctors doctor) {
        Doctors doctors = doctorService.saveDoctor(doctor);
        
        if (doctors == null)
            return "faild";
        else    
           return "success";
    }
	@PostMapping("doctorlogin")
	Doctors loginDoctor(@RequestBody Doctors doc) {
		
		Doctors doctor = doctorService.loginDoctor(doc.getEmail(), doc.getPassword());

		if (doctor != null) {
		System.out.println(doctor);
			return doctor;
		} else
			System.out.println(doctor);
		return null;
		
	}
	

	@GetMapping("doctorslists")
	List<Doctors> doctorsList()
	{
		List<Doctors> doctorsList=doctorService.findDoctors();
		return doctorsList;
	}
	
	@PostMapping("upadateDoctor")
    public Doctors upadateDoctors(@RequestBody Doctors doctors)
    {
        int result=doctorRepo.updateDoctor(doctors.getFirstname(), doctors.getLastname(),doctors.getEmail(),doctors.getDepartment(),doctors.getPhoneno(),doctors.getAddress(),doctors.getExp(), doctors.getId());
                
        if(result==1)
        {
            return doctorRepo.findById(doctors.getId()).get();
        }
        else {
            return doctors;
        }
        
    }
	@GetMapping("/doctorPasswordChange")
    public Doctors ChangePassword(@RequestParam(name = "password") String password,@RequestParam(name="id") int id)
    {
        
        int result=doctorRepo.changeDoctorPassword(password, id);
        if(result==1)
        {
            return doctorRepo.findById(id).get();
        }
        else {
            return null;
        }
        
        
    }
	
}
