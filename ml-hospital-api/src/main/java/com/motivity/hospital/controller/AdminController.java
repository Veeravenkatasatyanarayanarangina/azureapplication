package com.motivity.hospital.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.motivity.hospital.models.Admin;
import com.motivity.hospital.repository.AdminRepo;


//@CrossOrigin("https://happy-smoke-03815a810.2.azurestaticapps.net/")

@CrossOrigin("http://localhost:3000/")
@RestController
public class AdminController {
	@Autowired
	private AdminRepo adminRepo;

	

	@PostMapping("/adminlogin")
	public Admin login(@RequestBody Admin admin)
	{
		Admin currentAdmin = adminRepo.adminLogin(admin.getEmailId(), admin.getPassword());
		return currentAdmin;
	}
	
}
