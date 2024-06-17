import React from "react";
import { useGoogleLogin } from "@react-oauth/google";

const Login = () => {
  const authorize = useGoogleLogin({
    onSuccess: (response) => {
      console.log(response);
    },
    flow: "auth-code",
    scope: "https://www.googleapis.com/auth/drive",
  });

  return <button onClick={() => authorize()}>Login</button>;
};

export default Login;
