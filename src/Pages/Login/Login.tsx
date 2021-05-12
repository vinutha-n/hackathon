import React, { useReducer, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import login from '../../images/login.svg';
import logo from '../../images/logo.svg';
import './LoginStyle.css';
import admin from '../../mockJson/admin.json'
import { useHistory } from "react-router-dom";


const persons = admin;


type State = {
  username: string
  password:  string
  isButtonDisabled: boolean
  helperText: string
  isError: boolean
};

const initialState:State = {
  username: '',
  password: '',
  isButtonDisabled: true,
  helperText: '',
  isError: false
};

type Action = { type: 'setUsername', payload: string }
  | { type: 'setPassword', payload: string }
  | { type: 'setIsButtonDisabled', payload: boolean }
  | { type: 'loginSuccess', payload: string }
  | { type: 'loginFailed', payload: string }
  | { type: 'setIsError', payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setUsername': 
      return {
        ...state,
        username: action.payload
      };
    case 'setPassword': 
      return {
        ...state,
        password: action.payload
      };
    case 'setIsButtonDisabled': 
      return {
        ...state,
        isButtonDisabled: action.payload
      };
    case 'loginSuccess': 
      return {
        ...state,
        helperText: action.payload,
        isError: false
      };
    case 'loginFailed': 
      return {
        ...state,
        helperText: action.payload,
        isError: true
      };
    case 'setIsError': 
      return {
        ...state,
        isError: action.payload
      };
  }
}


const Login = () => {
// const [ Users, setUsers ] = useState(null);
// useEffect(() => {
//   let url = "/src/Login/Users.json";
//   fetch(url)
//   .then(res => res.json())
//   .then(Users => setUsers(Users))
// },[]

// );


  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.username.trim() && state.password.trim()) {
     dispatch({
       type: 'setIsButtonDisabled',
       payload: false
     });
    } else {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: true
      });
    }
  }, [state.username, state.password]);
  const history = useHistory();
  const handleLogin = () => {
    {persons.map((data) => {
      if (state.username === data.username && state.password === data.password  && data.roles === 'admin') {
        history.push('/Home');

        // dispatch({
        //   type: 'loginSuccess',
        //   payload: 'Login Successfully'
        // });
        
      }
      else if(state.username === data.username && state.password === data.password  && data.roles === 'tutor'){
          history.push('/Home');
      }
      else {
        dispatch({
          type: 'loginFailed',
          payload: 'Incorrect username or password'
        });
      }
    })}
      
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || handleLogin();
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
  
    (event) => {
      dispatch({
        type: 'setUsername',
        payload: event.target.value
      });
    };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setPassword',
        payload: event.target.value
      });
    }

  return (
    
<div id="login-register" className="container-fluid">
  <div  className="row">
    <div _ngcontent-gwj-c49="" className="col-md-6 lg-img" >
    <img className="SideImage" 
    src={login}/>
    </div>
    <div _ngcontent-gwj-c49="" className="col-md-6 lg-img" >
   

   <img className="Logo" 
    src={logo}/>
      <div className='formContainer'>

   <Form >
    <Form.Group controlId="formBasicEmail">
      <Form.Label>User Name</Form.Label>
      <Form.Control 
      //error ={state.isError}
      id="username"
      type="name"
      placeholder="Username"
      onChange={handleUsernameChange}
      onKeyPress={handleKeyPress}
      autoComplete="off"
       />
       </Form.Group>
  
    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control 
       //error={state.isError}
        id="password"
        type="password"
        placeholder="Password"
        //helperText={state.helperText}
        onChange={handlePasswordChange}
        onKeyPress={handleKeyPress}
       />
       <span>{state.helperText}</span>
    </Form.Group> 
    <Form.Group controlId="formBasicCheckbox">
    </Form.Group>
    <Button variant="primary" type="submit"
     onClick={handleLogin}
     disabled={state.isButtonDisabled}>
      Login
    </Button>
  
  </Form>
   </div>
 </div>
  </div>
  </div>
  );
}

export default Login;