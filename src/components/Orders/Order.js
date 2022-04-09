import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";

const auth = getAuth(app);

const Order = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <h1>Who is logged in?</h1>
      <h4>{user.displayName} is here boys.</h4>
    </div>
  );
};

export default Order;
