import React, { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { login, getInfo } from "../../user/customer/Customer";
import { useNavigate } from 'react-router-dom';

const clientId ="535321350238-hah6c37spl3eua2bujvvoug3ql237nns.apps.googleusercontent.com";
  
function AuthCustomerPage() {  
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
      localStorage.setItem('id', 1);
      localStorage.setItem('accessToken', res.data.accessToken);
    })
    getInfo(localStorage.getItem('id')).then((res) => {
      if(res.data){
        navigate("/customer/register")
      }else{
        navigate("/customer/home");
      }
      
    });
    }
  
  const onFailure = response => {
    console.log('FAILED', response);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
}

export default AuthCustomerPage;
