package com.csup.registration.services;

import java.util.List;

import com.csup.registration.dto.PendingDTO;
import com.csup.registration.entity.PendingEntity;

public interface PendingServices {
	Integer addPendingMember(PendingDTO dto);
	List<PendingEntity> findAllPending();
	PendingEntity findPendingById(String Reg_No);
}
