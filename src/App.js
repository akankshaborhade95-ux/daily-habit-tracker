import React, { useState } from "react";
import Habit from "./components/Habit";
import Progress from "./components/Progress";
import "./App.css";

function App() {
  // 6 beginner-friendly daily habits (text-only)
  const [habits, setHabits] = useState([
    { id: 1, name: "Morning Walk", done: false },
    { id: 2, name: "Meditation", done: false },
    { id: 3, name: "Cook a Healthy Meal", done: false },
    { id: 4, name: "Read a Book", done: false },
    { id: 5, name: "Plan Tomorrow", done: false },
    { id: 6, name: "Drink Water", done: false },
  ]);

  const [newHabit, setNewHabit] = useState("");

  // Toggle habit done/not done
  const toggleHabit = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, done: !habit.done } : habit
      )
    );
  };

  // Add new habit
  const addHabit = () => {
    if (newHabit.trim() === "") return;
    const habit = { id: habits.length + 1, name: newHabit, done: false };
    setHabits([...habits, habit]);
    setNewHabit("");
  };

  // Reset all habits
  const resetHabits = () => {
    setHabits(habits.map((habit) => ({ ...habit, done: false })));
  };

  return (
    <div className="app">
      <h1>Daily Habit Tracker</h1>
      <Progress habits={habits} />

      <div className="habit-list">
        {habits.map((habit) => (
          <Habit key={habit.id} habit={habit} toggleHabit={toggleHabit} />
        ))}
      </div>

      <div className="add-reset">
        <input
          type="text"
          placeholder="Add a new habit..."
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
        />
        <button onClick={addHabit}>Add Habit</button>
        <button onClick={resetHabits} className="reset">Reset All</button>
      </div>
    </div>
  );
}

export default App;

