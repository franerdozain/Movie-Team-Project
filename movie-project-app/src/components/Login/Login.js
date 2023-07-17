import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { FaLock,FaUser,} from 'react-icons/fa';

const formFields = [
  {
    label: 'Username',
    icon: <FaUser />,
    type: 'username',
    name: 'username',
    defaultValue: '',
    placeholder: 'Enter Username',
   
    message: 'We do not have an account associated with that username'
  },
  {
    label: 'Password',
    icon: <FaLock />,
    type: 'password',
    name: 'password',
    defaultValue: '',
    placeholder: 'Enter Password',
    
    message: 'incorrect password'
  }
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Login() {
  const [info, setInfo] = useState({
    username: '',
    password: ''
  });

 

  const FormInput = ({ label, icon, type, name, defaultValue, placeholder, onInputChange, message, invalid }) => {
    const handleBlur = (event) => {
      const { name, value } = event.target;
      onInputChange(name, value);
    };
    return (
      <Form.Group controlId={`form${name}`}>
        <Form.Label>{label}</Form.Label>
        <InputGroup>
          <InputGroup.Text>{icon}</InputGroup.Text>
          <Form.Control
            type={type}
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
            onBlur={handleBlur}
          />
        </InputGroup>
        {invalid && <div className="text-danger">{message}</div>}
      </Form.Group>
    );
  };
  
  const onInputChange = (name, value) => {
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));
    
  };


  console.log(info);


  return (
    <>
      <div className="text-center">
        <h1>Log In</h1>
        
        <hr/>
      </div>
      <div className="container">
        {formFields.map((field) => (
          <FormInput
            label={field.label}
            icon={field.icon}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            defaultValue={info[field.name]}
            onInputChange={onInputChange}
           
            message={field.message}
            
          />
        ))}

         <div className='my-2'>
          <Button>Log In</Button>
         </div>
        
        <div>
          <div className='mb-2'>
          don't have an account yet?
          </div>
          
          
          <Button>Make a new account</Button>
        </div>
        
      </div>
    </>
  );
}



export default Login;




