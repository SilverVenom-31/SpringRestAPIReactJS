package com.timing.marathon.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.timing.marathon.dao.ICandidate;
import com.timing.marathon.model.Candidate;

/**
 * Created by @AkhilD on 04/04/2021
 **/
@Service
@Transactional
public class CandidateService implements ICandidateService {

	@Autowired
	private ICandidate canDao;

	@Override
	public void registerCandidate(Candidate candidate) {
		canDao.registerCandidate(candidate);

	}

	@Override
	public Candidate getCandidate(String email) {

		return canDao.getCandidate(email);
	}

}
