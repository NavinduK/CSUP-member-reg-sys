package com.csup.registration.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.csup.registration.entity.MemberEntity;

public interface MemberRepository extends JpaRepository<MemberEntity, Integer> {

}
