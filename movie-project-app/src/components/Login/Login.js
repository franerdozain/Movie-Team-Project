import React, { useState, useEffect } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { FaLock, FaUser } from 'react-icons/fa';
import { Link, useNavigate} from 'react-router-dom';
import { saveUserToLocalStorage } from '../../localStorageManager';



const formFields = [
  {
    label: 'Username',
    icon: <FaUser />,
    type: 'username',
    name: 'username',
    defaultValue: '',
    placeholder: 'Enter Username',
  },
  {
    label: 'Password',
    icon: <FaLock />,
    type: 'password',
    name: 'password',
    defaultValue: '',
    placeholder: 'Enter Password',
  }
];

const message = "We couldn't log you in. Please check your email and password and try again.";

function Login() {
  const [info, setInfo] = useState({
    username: '',
    password: ''
  });
  const [invalidLogin, setInvalidLogin] = useState(false);
  const navigate = useNavigate();

  const users = getUsersFromLocalStorage() || [];

  const FormInput = ({label,icon,type,name,defaultValue,placeholder,onInputChange,invalid}) => {
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

  const handleLogin = () => {
    const userExists = users.find(
      (user) => user.username === info.username && user.password === info.password
    );
  
    if (userExists) {
      saveUserToLocalStorage(userExists);
      navigate('/Profile');
    } else {
      setInvalidLogin(true);
    }
  };

  console.log(info);

  return (
    <>
      <div className="text-center">
        <h1>Log In</h1>
        <hr />
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
          invalid={field.name === 'password' && invalidLogin} 
        />
        ))}

        <div className="my-2">
          <Button onClick={handleLogin}>Log In</Button>
        </div>
        <div>
          <div className="mb-2">Don't have an account yet?</div>
          <Link to="/Registration">
                make a new account
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
