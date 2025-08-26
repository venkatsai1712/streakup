function LoginPage() {
  return (
    <div className="container text-center">
      <div className="row vh-100 d-flex flex-column justify-content-center align-items-center">
        <h3>Streak Up</h3>
        <h1>Welcome Back!</h1>
        <p>Log-in to continuing your learning streaks</p>
        <button type="button" className="btn btn-primary" style={{ width: "200px" }}>
          Login with Google
        </button>
        <div className="mt-4">
          <p className="p-0 m-0">New here?</p>
          <h6 className="p-0 m-0">Start your streak!</h6>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
