package com.motivity.hospital.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.motivity.hospital.models.Appointments;
import com.motivity.hospital.models.Doctors;
import com.motivity.hospital.models.Patients;
import com.motivity.hospital.repository.AppointmentsRepo;
import com.motivity.hospital.repository.DoctorRepo;
import com.motivity.hospital.repository.PatientRepo;
import com.motivity.hospital.service.EmailNotificationService;


//@CrossOrigin("https://happy-smoke-03815a810.2.azurestaticapps.net/")
 @CrossOrigin("http://localhost:3000/")
@RestController
public class AppointmentController {

	 @Autowired
	 private PatientRepo patientRepo;

	 @Autowired
	 private EmailNotificationService emailNotificationService;
	 @Autowired
	 private AppointmentsRepo appointmentsRepo;
	 @Autowired
	 private DoctorRepo doctorRepo;
	 @Autowired
	 private AppointmentsRepo appointments;
	
	

	@PostMapping("/insertAppointment")
	public String insertAppointment(@RequestBody Appointments appointments) {
	
		Patients patient = patientRepo.findById(Integer.parseInt(appointments.getPatientId())).get();
		Appointments appointmentdata = appointmentsRepo.save(appointments);
		   if(appointmentdata==null)
	        {
	            return "failed";
	        }
	        else
	        {
	        	String text = "your request for doctor appointment was created.\n"
	        					+ "  we will notify you whenever doctor was accepted";
	        	String to = patient.getEmail();
	        	String subject = "doctor appointment request created";
	        	emailNotificationService.sendEmail(to, subject, text);

	        	return "success";
	        }
	}

	@GetMapping(value = "/acceptAppointments" )
    public List<Appointments> acceptAppointments(@RequestParam("appointmentId") int appointmentId,@RequestParam("doctorId") int doctorId) {
        
        Doctors doctor = doctorRepo.findById(doctorId).get();
        Appointments appointment = appointmentsRepo.findById(appointmentId).get();
        Patients patient = patientRepo.findById(Integer.parseInt(appointment.getPatientId())).get();
        int success=appointmentsRepo.acceptUpdate("", "", doctor.getFirstname()+" "+doctor.getLastname(), doctor.getGender(), appointmentId,"accepted",doctor.getPhoneno(),doctor.getId());
        List<Appointments> appList = appointmentsRepo.showAndAcceptAppointment(doctor.getDepartment(), "pending");
        if(success == 1) {
//        	String text = "your appointment was accepted by "+ doctor.getFirstname();
        	String to = patient.getEmail();
        	String subject = "motivity hospital appointment status";
        	String text="<!DOCTYPE html>"+
                    "<html>"
                    + "<body>"
                    + "<div>"
                    + "<p>hai"+patient.getPatientName()
                    + ",</p>"
                    + "<p>"
                    + "your appointment request has been approved by "
                    +"Dr. "+doctor.getFirstname()+" "+doctor.getLastname()
                    +".<br>"
                    + "you can come to the hospital by <b style='color:blue'>12-05-2022</b>"
                            + "</p>"
                            + " <br>"
                            + "<table>"
                            + "<tr>"
                            + "<td >"
                            + " <p> Thanks,</p> "
                            + " <p>motivityhospitals</p>"
                            + " </td>"
                            + " <td> "
                            + "</td>"
                            + "</tr>"
                            + "<tr>"
                            + " <td>"
                            + " </td>"
                            + " <td style='padding-left: 100px;'>"
                            + " <h4>INDIA</h4>"
                            + " <p>Dallas Center, 6th & 7th Floor,</p>"
                            + " <p>83/1, Plot No A1,</p>"
                            + " <p>Knowledge City Rd, Rai Durg,</p>"
                            + "<p>Hyderabad, Telangana 500032.</p>"
                            + " </td>"
                            + "</tr>"
                            + "</table>"
                            +"</html>";
        	emailNotificationService.sendEmail(to, subject, text);
        }
        return appList;
        
    }
    @PostMapping("showPendingAppointments")
    List<Appointments> showPendingAppointments(@RequestBody Doctors doctor){
    	List<Appointments> appList = appointmentsRepo.showAndAcceptAppointment(doctor.getDepartment(), "pending");
    	return appList;
    }
    @PostMapping("showAcceptedAppointments")
    List<Appointments> showAcceptedAppointments(@RequestBody Doctors doctor){
    
    	List<Appointments> appList = appointmentsRepo.showAcceptedAppointment(doctor.getDepartment(),doctor.getId(),"accepted");
    	return appList;
    }
    
    @GetMapping("/showStatus")
    public List<Appointments> showStatus(@RequestParam("id") int patientId)
    {
        List<Appointments> pt = appointmentsRepo.patientsidestatus(Integer.toString(patientId));        
        return pt;
    }
	@PostMapping("showAppointments")
	List<Appointments> showAppointments(@RequestBody Doctors doctor){
	List<Appointments> appList = appointments.showAndAcceptAppointment(doctor.getDepartment(), "pending");
	return appList;
	}
	
}
