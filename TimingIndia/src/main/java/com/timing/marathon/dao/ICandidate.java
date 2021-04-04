package com.timing.marathon.dao;

import com.timing.marathon.model.Candidate;

/**
 * Created by @AkhilD on 04/04/2021
 **/
public interface ICandidate {

	void registerCandidate(Candidate candidate);

	Candidate getCandidate(String email);

}
