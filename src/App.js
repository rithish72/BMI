import './App.css';
import React, { useState } from 'react';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('Normal');

  const calcBMI = (event) => {
    event.preventDefault();
    if (weight <= 0 || height <= 0) {
      alert('Please enter a valid weight and height');
      return;
    }
    const calculatedBMI = weight / Math.pow(height / 100, 2);
    setBmi(calculatedBMI.toFixed(2));
    if (calculatedBMI < 18.5) {
      setStatus('Underweight');
    } else if (calculatedBMI >= 18.5 && calculatedBMI <= 24.9) {
      setStatus('Normal');
    } else if (calculatedBMI >= 25 && calculatedBMI <= 29.9) {
      setStatus('Overweight');
    } else {
      setStatus('Obese');
    }
  };

  const resetForm = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setStatus('Normal');
  };

  return (
    <div className="App">
      <div className="container">
        <h1>BMI Calculator</h1>
        <form onSubmit={calcBMI}>
          <div className="form-group">
            <label>Weight (kg)</label>
            <input
              type="number"
              className="form-control"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter weight in kg"
            />
          </div>
          <div className="form-group">
            <label>Height (cm)</label>
            <input
              type="number"
              className="form-control"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter height in cm"
            />
          </div>
          <div className="button-group">
            <button type="submit" className="btn btn-primary">Calculate</button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={resetForm}
            >
              Reset
            </button>  
          </div>
        </form>
        <div className="result">
          
          {bmi && (
            <>
              <h2>Result</h2>
              <p>Your BMI is <span>{bmi}</span></p>
              <p>You are <span>{status}</span></p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
