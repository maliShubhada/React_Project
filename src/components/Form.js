import React, { useState } from 'react';
import '../styles/Form.css';
import FormSignup from './FormSignUp'
import FormSuccess from './FormSuccess';

const FormComp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
           <img className='form-img' src='images/img-7.jpg' alt='spaceship' /> 
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default FormComp;