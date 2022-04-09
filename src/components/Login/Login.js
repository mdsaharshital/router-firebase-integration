import { getAuth } from "firebase/auth";
import React from "react";
import app from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";

const auth = getAuth(app);
const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <h1>plz login</h1>
      <div className="">
        <input
          onClick={handleGoogleSignIn}
          type="button"
          value="sign in with Google"
        />
      </div>
      <form action="">
        <input type="email" name="" placeholder="Type your email" id="" />
        <br />
        <input type="password" placeholder="Type your password" />
        <br />
        <input type="submit" value="LogIn" />
      </form>
    </div>
  );
};

export default Login;
