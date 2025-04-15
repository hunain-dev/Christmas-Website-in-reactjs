import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const Alert = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [cutAlert, setCutAlert] = useState(false);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (cutAlert) return null; 

  return (
    <>
      {showAlert && (
        <div className="Alert">
          <p>
           This is a demo store for testing purpose - <strong>no ordered shall be Fulfilled</strong>.
          </p>
          <div className="icon">
            <FaTimes className="crossicon" onClick={() => setCutAlert(true)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
