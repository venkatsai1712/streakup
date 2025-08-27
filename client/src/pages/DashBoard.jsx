import axios from "axios";
import { useEffect } from "react";

function DashBoard() {
  async function gemini() {
    try {
      const response = await axios.post("http://localhost:3000/", {
        message: "Hello from client",
      });
      console.log(response.data.apireply);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    gemini();
  }, []);

  return (
    <div className="container text-center">
      <div>Streak</div>
      <div>Progress</div>
      <div>Insights</div>
    </div>
  );
}

export default DashBoard;
