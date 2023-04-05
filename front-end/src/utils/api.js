export default {
  getTestResults: async (test_id) => {
    return await fetch(`https://13wev7clmh.execute-api.eu-west-1.amazonaws.com/beta/tests/results?testid=${test_id}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => { return res.json(); })
  },

  getRandomPatient: async () => {
    return fetch(`https://13wev7clmh.execute-api.eu-west-1.amazonaws.com/beta/patients/random`, {
      method: 'GET',
      mode: 'cors'
    })
    .then((res) => { return res.json(); })
  }
}