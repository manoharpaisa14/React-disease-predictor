import React from 'react';
import { Link } from 'react-router-dom';

const Homes = () => {
  return ( 
    <div>
         <h1 className="text-center fw-bold bg-info rounded p-2">Welcome to the Disease Prediction App</h1>   
    <div className="container p-5 rounded shadow m-5 bg-light">
       
       <p className="text-white bg-secondary rounded p-2 m-1">
          This app helps you predict potential diseases based on the symptoms you input. 
          Using advanced algorithms and external disease prediction APIs, 
          we analyze the symptoms you provide and give predictions with confidence levels.
          <br/>
          <br/>
          You can input symptoms such as "fever", "headache", etc., and the app will 
          predict the potential diseases based on the symptoms entered. 
        </p>

        <div className="d-flex justify-content-center mt-4">
          <Link to="/main" className="btn btn-primary btn-lg">
            Click here to check
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homes;
