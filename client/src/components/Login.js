import React, {useState} from "react";
import {useHistory} from 'react-router-dom'
import {axiosWithAuth} from '../utils/axiosWithAuth'

const initialUser= {
   username: '',
   password:''
}



const Login = (props) => {
  const [credentials, setCredentials] = useState(initialUser)
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
const handleChange = e => {
    
    setCredentials  (  
     { ...credentials,
        [e.target.name]: e.target.value
     } )
  };

  const login = (e) => {
    e.preventDefault()
    console.log(credentials)
    axiosWithAuth()
        .post('api/login', credentials)
        .then(res => {window.localStorage.setItem('token', res.data.payload)
       props.history.push('/colors')})
        .catch(err => console.log(err))
       
  };
  return (
    <div>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
       <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
