export default {
  getRandomPatient: async () => {
    return fetch(`https://13wev7clmh.execute-api.eu-west-1.amazonaws.com/beta/patients/random`, {
      method: 'GET',
      mode: 'cors'
    })
    .then((res) => { return res.json(); })
  },


  // Get all Tests associated with a patient
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


  // Get Test Results for a single Test
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