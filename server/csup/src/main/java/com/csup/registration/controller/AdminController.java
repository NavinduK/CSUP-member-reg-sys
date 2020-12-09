package com.csup.registration.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.csup.registration.dto.RegNoDTO;
import com.csup.registration.entity.AdminEntity;
import com.csup.registration.services.AdminServices;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("csup")
public class AdminController {
	
	@Autowired
	private AdminServices adminServices;
	
	@GetMapping(value="/admins")
	public List<AdminEntity> GetAdmins(){
		return adminServices.findAllAdmin();
	}
	
	@PostMapping(value="/login/admin")
	public ResponseEntity<?> VerifyUser(@RequestBody HashMap<String, String> user){
		List <AdminEntity> admins = adminServices.findAllAdmin();
		System.out.println(user);
		for (int i = 0; i < admins.size(); i++) {
	          if(admins.get(i).getRegNo().equalsIgnoreCase(user.get("regNo")) && admins.get(i).getPassword().equals(user.get("password"))) {
	        	  System.out.println("valid");
	        	  return new ResponseEntity<>(
	        			  Map.of("res", "valid"),
	        	          HttpStatus.OK);
	          }
	     }
		System.out.println("not valid");
		return new ResponseEntity<>(
				Map.of("res", "not valid"),
				HttpStatus.OK);
	 }
	 
	 
}
