export default {

  // Retrieves a random patient
  getRandomPatient: async () => {
    return fetch(`https://13wev7clmh.execute-api.eu-west-1.amazonaws.com/beta/patients/random`, {
      method: 'GET',
      mode: 'cors'
    })
    .then((res) => { return res.json(); })
  },


  // Retrieves all tests associated with a given patient ID
  getTests: async (patient_id) => {
    return fetch(`https://13wev7clmh.execute-api.eu-west-1.amazonaws.com/beta/tests?patientid=${patient_id}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => { return res.json(); })
  },


  // Retrieves test results for a given test ID
  getTestResults: async (test_id) => {
    return fetch(`https://13wev7clmh.execute-api.eu-west-1.amazonaws.com/beta/tests/results?testid=${test_id}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => { return res.json(); })
  }
}