import React, { useContext, useEffect } from 'react';
import UserContext from "../contexts/UserContext";
import API from '../utils/api.js';

import './style/loading.css'


const Loading = ({ callback }) => {
  const { login } = useContext(UserContext);

  // Function to get a random patient from the API
  const getPatient = async () => {
    const patientData = await API.getRandomPatient();
    return patientData.body;
  }

  // Function to get all tests for a patient from the API
  const getTests = async (patientId) => {
    const testData = await API.getTests(patientId);
    return testData.body;
  }

  // Function to get the results of a test from the API
  const getTestResults = async (testId) => {
    const resultData = await API.getTestResults(testId);
    return resultData.body;
  }

  // Function to update user data in context with retrieved data
  const updateData = (data) => {
    login(data)
    callback(true);
  }

  // Function to fetch data from the API and update context
  async function fetchData() {
    let userData = await getPatient();
    let testData = await getTests(userData.patient_id);

    // Loop through tests and retrieve results for each test
    for (let i in testData) {
      let testResultData = await getTestResults(testData[i].test_id);
      testData[i]['results'] = testResultData;
    }

    // Add tests data to user data and update context
    userData['tests'] = testData;
    await updateData(userData);
  }

  // Fetch data on component mount
  useEffect(() => {
    let ignore = false;
    // Ignore cleanup if component is unmounted before fetching completes
    if (!ignore) fetchData();
    return () => { ignore = true };
  });

  return (
    <div className='loading-outer'>
      <div className='loading-inner'>
        Retrieving synthetic data...
      </div>
    </div>
  )
}

export default Loading;