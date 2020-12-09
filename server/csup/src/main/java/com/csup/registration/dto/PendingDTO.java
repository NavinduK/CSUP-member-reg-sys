package com.csup.registration.dto;

public class PendingDTO {
	
	private String regNo;
	
	private String fname;
	
	private String lname;
	
	private String email;
	
	private String phone;
	
	private String skills;
	
	public PendingDTO() {
		
	}
	public PendingDTO(String regNo, String fname, String lname, String phone, String email, String skills) {
		this.fname = fname;
		this.lname = lname;
		this.regNo = regNo;
		this.email = email;
		this.phone = phone;
		this.skills = skills;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getRegNo() {
		return regNo;
	}
	public void setRegNo(String regNo) {
		this.regNo = regNo;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getSkills() {
		return skills;
	}
	public void setSkills(String skills) {
		this.skills = skills;
	}
	@Override
	public String toString() {
		return "regNo: "+ regNo;
	}
	
}
