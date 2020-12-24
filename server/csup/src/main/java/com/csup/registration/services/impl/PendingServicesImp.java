package com.csup.registration.services.impl;

import java.util.List;
import java.util.Optional;

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

	@Override
	public PendingEntity findPendingById(String Reg_No){
		Optional<PendingEntity> user = pendingRepository.findById(Reg_No.replace("-", "/"));
		PendingEntity returnUser = new PendingEntity(user.get().getRegNo(),user.get().getFname(),user.get().getLname(),user.get().getPhone(),user.get().getEmail(),user.get().getSkills());
		return returnUser;
	}
}
