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
	public ResponseEntity<?> VerifyUser(@RequestBody RegNoDTO adminRegNo){
		List <AdminEntity> admins = adminServices.findAllAdmin();
		System.out.println(adminRegNo.getRegNo());
		for (int i = 0; i < admins.size(); i++) {
	          if(admins.get(i).getRegNo().equalsIgnoreCase(adminRegNo.getRegNo())) {
	        	  System.out.println("admin");
	        	  //HashMap<String, String> response = new HashMap<>();
	        	   // response.put("type", "admin");
	        	    //response.put("name", admins.get(i).getFname() + " " + admins.get(i).getFname());
	        	  return new ResponseEntity<>(
	        			  Map.of(
	        					  "type", "admin",
	        					  "name", admins.get(i).getFname() + " " + admins.get(i).getLname()
	        			   ),
	        	          HttpStatus.OK);
	          }
	     } 
		//Here if condition to verify the user is a member
		System.out.println("new");
		return new ResponseEntity<>(
				Map.of("type", "new"),
				HttpStatus.OK);
	 }
}
