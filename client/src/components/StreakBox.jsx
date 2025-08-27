import React from "react";
import "./StreakBox.css"; 

const StreakBox = ({ totalDays = 30, streakDays = 7 }) => {
  const boxes = Array.from({ length: totalDays }, (_, i) => i + 1);

  return (
    <div className="streak-box">
      <h3>🔥 {streakDays}-Day Streak</h3>
      <div className="streak-grid">
        {boxes.map((day) => (
          <div
            key={day}
            className={`streak-cell ${day <= streakDays ? "active" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default StreakBox;
