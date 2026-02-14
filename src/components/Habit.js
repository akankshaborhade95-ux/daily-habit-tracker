import React from "react";
import "./Habit.css";

function Habit({ habit, toggleHabit }) {
  return (
    <div
      className={`habit ${habit.done ? "done" : ""}`}
      onClick={() => toggleHabit(habit.id)}
    >
      <span className="icon">{habit.icon}</span>
      <span className="name">{habit.name}</span>
      <input
        type="checkbox"
        checked={habit.done}
        onChange={() => toggleHabit(habit.id)}
      />
    </div>
  );
}

export default Habit;
