import React from "react";
import "./Progress.css";

function Progress({ habits }) {
  const total = habits.length;
  const completed = habits.filter((h) => h.done).length;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p>{percentage}% completed</p>
    </div>
  );
}
export default Progress;
