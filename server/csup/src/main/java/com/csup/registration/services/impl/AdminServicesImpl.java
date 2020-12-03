package com.csup.registration.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csup.registration.repository.AdminRepository;
import com.csup.registration.services.AdminServices;
import com.csup.registration.entity.AdminEntity;

@Service
public class AdminServicesImpl  implements AdminServices{
	@Autowired
	private AdminRepository adminRepository;
	
	@Override
	public List<AdminEntity> findAllAdmin() {
		List<AdminEntity> allAdmins = adminRepository.findAll();
		return allAdmins;
	}
}
