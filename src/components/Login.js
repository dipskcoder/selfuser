import React, { useState, useEffect } from "react";

function Login() {
  const [boom, setBoom] = useState(51);

  const handleUpdate = () => {
    setBoom(boom + 1);
  };

  console.log(boom);

  useEffect(() => {}, []);

  return (
    <>
      <div className="container">
        <div className="logo" onClick={handleUpdate}>
          Self User
        </div>
login by Ram
        <br />

        <label>User Name - {boom}</label>
        <input name="username" type="text" />

        <br />
        <label>Password</label>
        <input name="password" type="password" />

        <br />
        <br />
        <div className="signin">Sign in</div>
        <br />
        <a href="www.google.com">forgot password</a>
        <br />
        <a href="/registration">signup</a>
      </div>
    </>
  );
}
export default Login;
