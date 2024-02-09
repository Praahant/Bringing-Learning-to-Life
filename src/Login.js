import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);
  return (
  
    <div class="logincontainer">
    <div class="circle1"></div>
<div class="circle2"></div>
<div class="glass-card">
  <div className="googleloginbtn">
<button className="login__btn login__google" onClick={signInWithGoogle}>
<div class="glogo">
  <div class="gcircle"></div>
  <div class="gbar"></div>
  <div class="gcolors"></div>
</div>
          Login with Google
        </button>
        </div>

</div>

    
    </div>
  );
}
export default Login;