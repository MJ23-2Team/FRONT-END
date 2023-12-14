import React, { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { login, retrieveInfo } from "../../user/customer/Customer";
import { useNavigate } from 'react-router-dom';

import "./AuthPage.css";

const clientId ="535321350238-hah6c37spl3eua2bujvvoug3ql237nns.apps.googleusercontent.com";
  
function AuthEmployeePage() {  
  const navigate = useNavigate()
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:clientId,
        scope: 'email',
      });
    }

    gapi.load('client:auth2', start);
  }, []);

  const onSuccess = response => {
    console.log('SUCCESS', response.accessToken);
    login(response.accessToken).then((res) => {
      localStorage.clear();
      localStorage.setItem('id', res.data.userId);
      localStorage.setItem('accessToken', res.data.accessToken);
      retrieveInfo(res.data.userId).then((res) => {
        if(res.data){
          navigate("/register")
        }else{
          navigate("/home");
        }
        
      });
    })
    }
  
  const onFailure = response => {
    console.log('FAILED', response);
  };

  return (
    <div className="page">
     
      <div className="container">
          <div className="left">
            <div className="login">Login</div>
            <div className="eula">By logging in you agree to the ridiculously long terms that you didn't bother to read</div>
          </div>
          <div className="right">
          
            <div className="form">
            <img alt="LoginBook" src="loginbook.png" />
            <GoogleLogin className="button"
              clientId={clientId}
              onSuccess={onSuccess}
              onFailure={onFailure}
            />
            </div>
          </div>
        </div>
    </div>
    
  );
}

export default AuthEmployeePage;
