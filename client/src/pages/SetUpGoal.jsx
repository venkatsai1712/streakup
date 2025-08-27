import GoogleGemini from "../apis/GoogleGemini";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SetUpGoal() {
  const [isGoalResponseLoaded, GoalResponseLoaded] = useState(false);
  const [isGoalDurationResponseLoaded, GoalDurationResponseLoaded] =
    useState(false);

  const [goal, setGoal] = useState("");
  const [duration, setDuration] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [response, setResponse] = useState("");

  const getGoalResponse = async () => {
    try {
      if (goal !== "") {
        const res = await GoogleGemini(
          goal +
            "---how much time it takes to achieve the goal to learn beginner or intermediate or master....---answer in maximum 15 words exact time by level and remove any extra characters"
        );
        console.log(res);
        setResponse(res);
        GoalResponseLoaded(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getDayTasksResponse = async () => {
    try {
      if (goal !== "" && duration > 0) {
        GoalResponseLoaded(false);
        const res = await GoogleGemini(
          goal +
            "-" +
            duration +
            "days-" +
            "---give me a day wise breakup of tasks to achieve this goal, represent in a way that each day tasks should be seperated by * only tasks no extra characters and tasks should be in maximum 15 words,, example:- [tasks for day 1 * tasks for day 2 * tasks for day 3] and so on"
        );

        setTasks([...res.toString().split("*")]);
        GoalDurationResponseLoaded(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container text-center">
      <h3>Set Up Goal</h3>
      <div className="d-flex flex-column align-items-start mb-4">
        <label htmlFor="goal-title" className="form-label">
          Goal Title
        </label>
        <div className="input-group">
          <input
            type="text"
            className="form-control border border-2 border-primary"
            id="goal-title"
            placeholder="Eg:- Learn React"
            value={goal}
            onChange={(e) => {
              setGoal(e.target.value);
            }}
            required
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={getGoalResponse}
          >
            Set Goal
          </button>
        </div>
      </div>

      {isGoalResponseLoaded ? (
        <div className="d-flex flex-column align-items-start border border-2 rounded border-primary p-2 my-4">
          <b>{response}</b>
        </div>
      ) : null}

      <div className="d-flex flex-column align-items-start">
        <label htmlFor="goal-duration" className="form-label">
          Target days for Goal
        </label>
        <div className="input-group">
          <input
            type="text"
            className="form-control border-primary border p-2 border-2"
            id="goal-duration"
            placeholder="Days"
            value={duration}
            onChange={(e) => {
              setDuration(Number(e.target.value));
            }}
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={getDayTasksResponse}
          >
            Set Duration
          </button>
        </div>
      </div>

      {isGoalDurationResponseLoaded ? (
        <table className="table table-bordered mt-4 border border-primary table-rounded">
          <thead>
            <tr>
              <th>Day</th>
              <th>Tasks</th>
            </tr>
          </thead>
          <tbody>
            {isGoalDurationResponseLoaded
              ? tasks.map((task, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{task}</td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      ) : null}
      <Link to="/" className="btn btn-primary m-4">
        Start Streak
      </Link>
    </div>
  );
}

export default SetUpGoal;
