import React, { useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import { login, getInfo } from "../../user/customer/Customer";
import { useNavigate } from 'react-router-dom';

const clientId ="535321350238-hah6c37spl3eua2bujvvoug3ql237nns.apps.googleusercontent.com";
  
function AuthPage() {  
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
      alert(res.data.message);
      localStorage.clear();
      localStorage.setItem('id', res.data.data.userId);
      localStorage.setItem('accessToken', res.data.data.accessToken);
    })
    getInfo(localStorage.getItem('id')).then((res) => {
      if(res.data.data){
        navigate("/regsiter")
      }else{
        navigate("/home");
      }
      
    });
    }
  
  const onFailure = response => {
    console.log('FAILED', response);
  };
  const onLogoutSuccess = () => {
    console.log('SUCESS LOG OUT');
    localStorage.clear();
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
      <GoogleLogout
        clientId={clientId}
        onLogoutSuccess={onLogoutSuccess}
      />
    </div>
  );
}

export default AuthPage;
