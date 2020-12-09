package com.csup.registration.services;

import java.util.List;

import com.csup.registration.entity.MemberEntity;

public interface MemberServices {
	List<MemberEntity> findAllMember();
}
