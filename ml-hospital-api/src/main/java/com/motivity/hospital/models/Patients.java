package com.motivity.hospital.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.context.annotation.Scope;

@Entity
@Scope(value = "Prototype")

public class Patients {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int patientId;
	private String patientName;
	private String Patient_age;
	private String patientAddress;
	@Column(unique=true)
	private String email;
	private String patient_gender;
	private String phoneNo;
	private String password;
	public int getPatientId() {
		return patientId;
	}
	public void setPatientId(int patientId) {
		this.patientId = patientId;
	}
	public String getPatientName() {
		return patientName;
	}
	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}
	public String getPatient_age() {
		return Patient_age;
	}
	public void setPatient_age(String patient_age) {
		Patient_age = patient_age;
	}
	public String getPatientAddress() {
		return patientAddress;
	}
	public void setPatientAddress(String patientAddress) {
		this.patientAddress = patientAddress;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPatient_gender() {
		return patient_gender;
	}
	public void setPatient_gender(String patient_gender) {
		this.patient_gender = patient_gender;
	}
	public String getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Patients() {
		super();
	}

}
