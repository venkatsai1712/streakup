function LoginPage() {
  return (
    <div
      className="container d-flex align-items-center justify-content-center vh-100"
      style={{
        background: "linear-gradient(135deg, #8ce788ff, #002202ff)",
        color: "#fff",
      }}
    >
      <div
        className="card text-center d-flex justify-content-center align-items-center shadow-lg p-5"
        style={{
          borderRadius: "20px",
          maxWidth: "450px",
          width: "100%",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(12px)",
        }}
      >
        <h3 className="fw-bold" style={{ color: "#fff" }}>
          Streak Up
        </h3>
        <h1 className="fw-bold mb-3">Welcome Back!</h1>
        <p className="mb-4">Log in to continue your learning streaks</p>

        <button
          type="button"
          className="btn btn-light fw-bold"
          style={{
            width: "220px",
            borderRadius: "50px",
            background: "#fff",
            color: "#333",
          }}
        >
          <i className="bi bi-google me-2"></i> Login with Google
        </button>

        <div className="mt-4">
          <p className="p-0 m-0">New here?</p>
          <h6 className="p-0 m-0 fw-bold" style={{ color: "#052508ff" }}>
            Start your streak!
          </h6>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
