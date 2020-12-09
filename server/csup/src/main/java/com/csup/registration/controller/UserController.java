package com.csup.registration.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.csup.registration.entity.AdminEntity;
import com.csup.registration.entity.MemberEntity;
import com.csup.registration.services.AdminServices;
import com.csup.registration.services.MemberServices;

@RestController
@RequestMapping("csup")
public class UserController {
	
	@Autowired
	private AdminServices adminServices;
	@Autowired
	private MemberServices memberServices;
	
	@PostMapping(value="/verify/user")
	public ResponseEntity<?> VerifyUser(@RequestBody HashMap<String, String> userRegNo){
		List <AdminEntity> admins = adminServices.findAllAdmin();
		List <MemberEntity> members = memberServices.findAllMember();
		
		System.out.println(userRegNo.get("regNo"));
		//verify the user is a admin
		for (int i = 0; i < admins.size(); i++) {
	          if(admins.get(i).getRegNo().equalsIgnoreCase(userRegNo.get("regNo"))) {
	        	  System.out.println("admin");
	        	  return new ResponseEntity<>(
	        			  Map.of(
	        					  "type", "admin",
	        					  "name", admins.get(i).getFname() + " " + admins.get(i).getLname()
	        			   ),
	        	          HttpStatus.OK);
	          }
	     } 
		//verify the user is a member
		for (int i = 0; i < members.size(); i++) {
	          if(members.get(i).getRegNo().equalsIgnoreCase(userRegNo.get("regNo"))) {
	        	  System.out.println("member");
	        	  return new ResponseEntity<>(
	        			  Map.of(
	        					  "type", "member",
	        					  "name", members.get(i).getFname() + " " + members.get(i).getLname()
	        			   ),
	        	          HttpStatus.OK);
	          }
	     } 
		//if not a member or admin, new member will return
		System.out.println("new");
		return new ResponseEntity<>(
				Map.of("type", "new"),
				HttpStatus.OK);
	 }

}
