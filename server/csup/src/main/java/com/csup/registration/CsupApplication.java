package com.csup.registration;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.ArrayList;

@SpringBootApplication
@RestController
@RequestMapping("csup")
public class CsupApplication {
	
	@GetMapping(value="/admins")
	public ArrayList<Admins> GetAdmins(){
		ArrayList<Admins> admins = new ArrayList<Admins>();
		admins.add(new Admins("Navindu","Kavishka","S/17/827","s17827@email.com","0123345567","admin","Designer"));
		admins.add(new Admins("Amith","Vinduranga","S/17/499","s17499@email.com","0199999997","admin","Cordinator"));
		
		return admins;
	}

	public static void main(String[] args) {
		SpringApplication.run(CsupApplication.class, args);
	}

}
