package com.csup.registration.services;

import java.util.List;

import com.csup.registration.entity.AdminEntity;

public interface AdminServices {
	List<AdminEntity> findAllAdmin();
}
