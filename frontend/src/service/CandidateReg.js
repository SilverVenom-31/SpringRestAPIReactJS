import axios from "axios";

const CANDIDATE_API_BASE_URL = "http://localhost:8080/TimingIndia/candidate";
class CandidateRegistration {
  registerCandidate(candidate) {
    return axios.post("" + CANDIDATE_API_BASE_URL + "/register", candidate);
  }

  getCandidateDets(emailId) {
    return axios.get("" + CANDIDATE_API_BASE_URL + "/details/" + emailId);
  }
}

export default new CandidateRegistration();
