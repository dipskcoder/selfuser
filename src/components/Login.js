function Login() {
  return (
    <>
      <div className="container">
        <div className="logo">Self User</div>

        <br />

        <label>User Name - </label>
        <input name="username" type="text" />

        <br />
        <label>Password</label>
        <input name="password" type="password" />

        <br />
        <br />
        <div className="signin">Sign in</div>
        <br />
        <a href="/Forgotpassword">forgot password</a>
        <br />
        <a href="/registration">signup</a>
      </div>
    </>
  );
}
export default Login;
