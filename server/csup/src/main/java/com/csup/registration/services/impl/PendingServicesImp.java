package com.csup.registration.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csup.registration.dto.PendingDTO;
import com.csup.registration.entity.PendingEntity;
import com.csup.registration.repository.PendingRepository;
import com.csup.registration.services.PendingServices;

@Service
public class PendingServicesImp implements PendingServices {
	@Autowired
	private PendingRepository pendingRepository;
	
	@Override
	public Integer addPendingMember(PendingDTO dto) {
		if(dto!=null) {
			PendingEntity user = new PendingEntity(dto.getRegNo(),dto.getFname(),dto.getLname(),dto.getPhone(),dto.getEmail(),dto.getSkills());
			pendingRepository.save(user);
			return 1;
		}
		else 
			return 0;
	}
	
	@Override
	public List<PendingEntity> findAllPending(){
		List<PendingEntity> allPending = pendingRepository.findAll();
		return allPending;
	}
}
