package com.timing.marathon.dao;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.timing.marathon.model.Candidate;

/**
 * Created by @AkhilD on 04/04/2021
 **/
@Repository
public class CandidateDaoImpl implements ICandidate {

	@Autowired
	private EntityManager mgr;

	@Override
	public void registerCandidate(Candidate candidate) {
		mgr.persist(candidate);

	}

	@Override
	public Candidate getCandidate(String email) {

		return mgr.find(Candidate.class, email);
	}

}
