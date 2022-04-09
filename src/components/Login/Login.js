import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { signInWithGoogle } = useFirebase();
  return (
    <div>
      <h1>plz login</h1>
      <div className="">
        <input
          onClick={signInWithGoogle}
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
