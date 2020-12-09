package com.csup.registration.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.csup.registration.entity.PendingEntity;

public interface PendingRepository extends JpaRepository<PendingEntity, String> {

}
