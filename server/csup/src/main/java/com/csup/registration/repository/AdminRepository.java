package com.csup.registration.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.csup.registration.entity.AdminEntity;

public interface AdminRepository extends JpaRepository<AdminEntity, String> {

}
