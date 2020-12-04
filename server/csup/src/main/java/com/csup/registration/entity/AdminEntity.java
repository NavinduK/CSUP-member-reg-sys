package com.csup.registration.entity;

import javax.persistence.Entity;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "admin")
public class AdminEntity {
	
	@Id
	@Column(name="RegID")
	private String regNo;
	
	@Column(name="First_Name")
	private String fname;
	
	@Column(name="Last_Name")
	private String lname;
	
	@Column(name="Email")
	private String email;
	
	@Column(name="Contact_No")
	private String phone;
	
	@Column(name="Post")
	private String post;
	
	@Column(name="Password")
	private String password;
	
	public AdminEntity() {
		
	}
	
	public AdminEntity(String regNo, String fname, String lname, String phone, String email, String post, String password) {
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
		return "regNo: "+ regNo;
	}
}
