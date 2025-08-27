import ProgressBar from "../components/ProgressBar";
import StreakBox from "../components/StreakBox";
import CheckIn from "./CheckIn";
import { Link } from "react-router-dom";

function DashBoard() {
  return (
    <div className="container text-center">
      <div className="greeting-card">
        <div>
          <h3>Hey Sai...</h3>
          <h3>
            <span className="highlight">Java</span> in{" "}
            <span className="highlight">30 days</span>
          </h3>
        </div>
        <div>
          <Link to="/CheckIn" className="btn btn-warning mx-2">
            Check In (Day-2)
          </Link>
          <Link to="/SetUpGoal" className="btn btn-warning mx-2">
            Set Up Goal
          </Link>
        </div>
      </div>

      <div className="streak-message">
        <span>
          🔥 Only <b>2 days</b> left to reach your <b>10-day streak!</b>
        </span>
      </div>
      <div>
        <StreakBox totalDays={30} streakDays={10} />
      </div>
      <div>
        <ProgressBar width={(20 / 30) * 100} />
      </div>
    </div>
  );
}

export default DashBoard;
