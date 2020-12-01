package com.csup.registration;

public class Admins {
	private String fname;
	private String lname;
	private String regNo;
	private String email;
	private String phone;
	private String password;
	private String post;
	
	public Admins(String fname, String lname, String regNo, String email, String phone, String password, String post) {
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
	
	
}
