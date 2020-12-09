package com.csup.registration.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csup.registration.entity.MemberEntity;
import com.csup.registration.repository.MemberRepository;
import com.csup.registration.services.MemberServices;

@Service
public class MemberServicesImpl  implements MemberServices{
	@Autowired
	private MemberRepository memberRepository;
	
	@Override
	public List<MemberEntity> findAllMember() {
		List<MemberEntity> allMembers = memberRepository.findAll();
		return allMembers;
	}
}
