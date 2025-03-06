import React from 'react'

const About = () => {
    return (
        <div className="container mt-5 p-3 rounded shadow">
              <h2 className="text-center fw-bold">About This App</h2>
              
              <div>
              <h3 className="mt-4 text-black">What is Disease Prediction?</h3>
              <p className='text-success'>
                This app helps you predict potential diseases based on the symptoms you input. 
                It uses an external disease prediction API to analyze your symptoms and provide 
                disease predictions with probability estimates.
              </p>
              </div>
                
              <div>
                <h3 className="mt-4 text-black">Technologies Used</h3>
              
                  <p className='text-success'><span className='text-danger fw-bold'>ReactJS:</span> A popular JavaScript library for building user interfaces.</p>
                  <p className='text-success'><span className='text-danger fw-bold'>FetchApi:</span> king HTTP requests to the API to get disease predictions.</p>
                  <p className='text-success'><span className='text-danger fw-bold'>RapidAPI:</span> The API platform to provide disease prediction data.</p>
              </div>    
                 
              <div>
                 
              <h3 className="mt-4 text-black">How to Use</h3>
                <p className='m-0 text-success'>Go to the Home section to input your symptoms.</p>
                <p className='m-0 text-success'>Click "Predict Disease" to get the results.</p>
              </div>  
            </div>
        
    );
}

export default About
