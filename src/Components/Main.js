
import React, { useState, useEffect } from 'react';

const Main = () => {
    const [symptoms, setSymptoms] = useState('');
    const [prediction, setPrediction] = useState(null);
  
    // Get the stored prediction from localStorage on page load
    useEffect(() => {
      const store = localStorage.getItem('diseasePrediction');
      if (store) {
        setPrediction(JSON.parse(store));
      }
    }, []);
  
    // Function to predict disease based on entered symptoms
    const predict = async () => {
      if (!symptoms) {
        alert('Please enter symptoms');
        return;
      }
  
      const url = 'https://human-disease-detector.p.rapidapi.com/human_disease/predict';
      const options = {
        method: 'POST',
        headers: {
          'x-rapidapi-key': 'give your api here ',
          'x-rapidapi-host': 'human-disease-detector.p.rapidapi.com',
          'Content-Type': 'application/json',
          'x-token': 'Makshad Nai Bhoolna @ 2025', 
        },
        body: JSON.stringify({ symptoms: symptoms}), // Send symptoms as a string
      };
  
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result); // Log the result to check its structure
  
        // Check if the result contains disease data
        if (result && result.disease) {
          setPrediction(result);
          localStorage.setItem('diseasePrediction', JSON.stringify(result));
        } else {
          alert('Unable to predict disease. Please try again.');
        }
      } catch (error) {
        console.error('Error predicting disease:', error);
        alert('Error occurred while predicting disease');
      }
    };

    const clearPrediction = () =>{
        setPrediction(null);
        localStorage.removeItem('diseasePrediction');
    }
  
    return (
      <div className="container p-5 rounded shadow bg-light">
         <h1 className="text-center fw-bold">Disease Prediction</h1>
      <div className="mt-5 rounded bg-info p-4">
        <div className="m-5">
          <label className="symptoms mt-4">Enter Symptoms:</label>
          <input
            type="text"
            id="symptoms"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            className="form-control mt-1"
          />
        </div>
  
       <div className="d-flex justify-content-between">
       <button onClick={predict} className="btn btn-success">
          Predict Disease
        </button>
        <button onClick={clearPrediction} className="btn btn-danger">
        Clear Prediction
        </button>
       </div>
        </div>
        
        {prediction && prediction.disease && (
          <div className="bg-secondary text-white rounded mt-3 p-2">
          <div className="mt-3">
            <h3>Predicted Disease: {prediction.disease}</h3>
          </div>
          </div>
        )}
        </div>
    );
}

export default Main
