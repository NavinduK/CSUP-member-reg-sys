package com.csup.registration.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.csup.registration.dto.PendingDTO;
import com.csup.registration.entity.PendingEntity;
import com.csup.registration.services.PendingServices;

@RestController
@RequestMapping("csup")
public class PendingController {
	
	@Autowired
	private PendingServices pendingServices;
	
	@GetMapping(value="/pendings")
	public List<PendingEntity> getPending(){
		return pendingServices.findAllPending();
	}
	
	@PostMapping(value="/pending/add")
	public ResponseEntity<?> VerifyUser(@RequestBody PendingDTO user){
		Integer result = pendingServices.addPendingMember(user);
		if(result==1) {
			return new ResponseEntity<>(HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	}
}