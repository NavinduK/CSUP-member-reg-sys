package com.csup.registration.dto;

public class AdminDTO {
	private String fname;
	private String lname;
	private String regNo;
	private String email;
	private String phone;
	private String password;
	private String post;
	
	public AdminDTO(String fname, String lname, String regNo, String email, String phone, String post) {
		this.fname = fname;
		this.lname = lname;
		this.regNo = regNo;
		this.email = email;
		this.phone = phone;
		this.post = post;
	}
	public AdminDTO(String regNo) {
		this.regNo = regNo;
	}
	public AdminDTO(String fname, String lname, String regNo, String email, String phone, String password, String post) {
		this.fname = fname;
		this.lname = lname;
		this.regNo = regNo;
		this.email = email;
		this.phone = phone;
		this.password = password;
		this.post = post;
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
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPost() {
		return post;
	}
	public void setPost(String post) {
		this.post = post;
	}
	public String toString() {
		return "Admins [fistName=" + fname + ", lastName=" + lname + ", regNo=" + regNo + ", email=" + email + ", phone="
				+ phone + ", post=" + post + "]";
	}
}
