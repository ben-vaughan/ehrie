import React, { useContext, useEffect } from 'react';
import UserContext from "../contexts/UserContext";
import API from '../utils/api.js';

import './style/loading.css'


const Loading = ({ callback }) => {
  const { login } = useContext(UserContext);

  const getPatient = async () => {
    const patientData = await API.getRandomPatient();
    return patientData.body;
  }

  const getTests = async (patientId) => {
    const testData = await API.getTests(patientId);
    return testData.body;
  }

  const getTestResults = async (testId) => {
    const resultData = await API.getTestResults(testId);
    return resultData.body;
  }

  const updateData = (data) => {
    console.log(data)
    login(data)
    callback(true);
  }

  async function fetchData() {
    let userData = await getPatient();
    let testData = await getTests(userData.patient_id);
    
    for (let i in testData) {
      let testResultData = await getTestResults(testData[i].test_id);
      testData[i]['results'] = testResultData;
    }

    userData['tests'] = testData;
    await updateData(userData);
  }

  useEffect(() => {
    let ignore = false;
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