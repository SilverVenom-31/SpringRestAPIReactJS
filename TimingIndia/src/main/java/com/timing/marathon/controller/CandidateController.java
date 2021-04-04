package com.timing.marathon.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.timing.marathon.model.Candidate;
import com.timing.marathon.service.ICandidateService;

/**
 * Created by @AkhilD on 04/04/2021
 **/

@RestController
@CrossOrigin
@RequestMapping("/candidate")
public class CandidateController {

	@Autowired
	private ICandidateService candidateService;

	@PostMapping("/register")
	public ResponseEntity<?> registerCandidate(@RequestBody Candidate candidate) {
		try {
			candidateService.registerCandidate(candidate);
			return ResponseEntity.ok("Candidate Registered successfully");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Failed to register candidate");
		}

	}

	@GetMapping("/details/{emailId}")
	public ResponseEntity<?> getCandidate(@PathVariable String emailId) {

		return ResponseEntity.ok(candidateService.getCandidate(emailId));

	}

}
