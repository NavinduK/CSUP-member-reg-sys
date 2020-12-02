package com.csup.registration;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;

@SpringBootApplication
@RestController
@RequestMapping("csup")
public class CsupApplication {
	ArrayList<Admins> admins = new ArrayList<Admins>();
	
	@EventListener(ApplicationReadyEvent.class)
	public void addSampleData() {
		admins.add(new Admins("Navindu","Kavishka","S/17/827","s17827@email.com","0123345567","admin","Designer"));
		admins.add(new Admins("Amith","Vinduranga","S/17/499","s17499@email.com","0199999997","admin","Cordinator"));
	}
	
	@GetMapping(value="/admins")
	public ArrayList<Admins> GetAdmins(){
		return admins;
	}
	
	@PostMapping(value="/login/admin")
	public Admins VerifyUser(@RequestBody Admins adminRegNo){
		System.out.println(adminRegNo.getRegNo());
		for (int i = 0; i < admins.size(); i++) { 		      
	          if(admins.get(i).getRegNo().equalsIgnoreCase(adminRegNo.getRegNo())) {
	        	  System.out.println("Valid");
	        	  return admins.get(i);
	          }
	     } 
		System.out.println("Not Valid");
		throw new ResponseStatusException(
			 HttpStatus.NOT_FOUND, "entity not found"
		 );
	 }
	
	public static void main(String[] args) {
		SpringApplication.run(CsupApplication.class, args);
	}

}
