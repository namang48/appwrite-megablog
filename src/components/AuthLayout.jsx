import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthLayout = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {

    // if(authStatus === true){
    //     navigate('/')
    // }else if(authStatus === false){
    //     navigate('/login');
    // }

    // Make it more easy and go to chatgpt for better understanding
    if(authentication && authStatus !== authentication){
        navigate('/login')
    }else if(!authentication && authStatus !== authentication){
        navigate('/');
    }

    //Simpler ways
    // if (authStatus !== authentication) {
    //     navigate(authentication ? '/login' : '/');
    // }

    setLoader(false);
  }, [authStatus,navigate,authentication]);

  return loader?<h1>Loading.......</h1> : <>{children}</>
};

export default AuthLayout;
