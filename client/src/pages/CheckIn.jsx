import "./CheckIn.css";

function CheckIn() {
  return (
    <div className="d-flex justify-content-center  min-vh-100 bg-light">
      <div className="checkin-card text-center p-4">
        <h5 className="mb-2">Check-In</h5>
        <h2 className="text-muted">Day 2</h2>

        <div className="task-section my-4">
          <p className="fw-semibold">
            Today's Task: <b>Learn Loops</b>
          </p>
          <div className="task-completion">
            <p className="fw-semibold">Completed</p>
            <div className="d-flex gap-3 justify-content-center">
              <button className="btn btn-success px-3">Yes ✅</button>
              <button className="btn btn-warning px-3">Partial ⏳</button>
              <button className="btn btn-danger px-3">No ❌</button>
            </div>
          </div>
        </div>

        <div className="time-section mt-4">
          <p className="fw-semibold">⏱ Time Spent</p>
          <div className="input-group w-75 mx-auto">
            <input
              type="number"
              className="form-control text-center"
              placeholder="0"
            />
            <span className="input-group-text">Hrs</span>
            <input
              type="number"
              className="form-control text-center"
              placeholder="0"
            />
            <span className="input-group-text">Mins</span>
          </div>
        </div>

        <div className="mt-4">
          <button className="btn btn-primary px-5 py-2">
            Save Check-In 🚀
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckIn;
