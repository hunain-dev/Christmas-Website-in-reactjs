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
            This website is for practice only. Orders <strong>will not be processed</strong>.
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
