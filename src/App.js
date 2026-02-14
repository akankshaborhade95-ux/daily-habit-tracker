import React, { useState } from "react";
import Habit from "./components/Habit";
import Progress from "./components/Progress";
import "./App.css";

function App() {
  const [habits, setHabits] = useState([
    { id: 1, name: "Drink Water", icon: "💧", done: false },
    { id: 2, name: "Morning Walk", icon: "🚶‍♂️", done: false },
    { id: 3, name: "Read a Book", icon: "📖", done: false },
    { id: 4, name: "Meditation", icon: "🧘‍♀️", done: false },
    { id: 5, name: "Write Journal", icon: "✍️", done: false },
    { id: 6, name: "Stretching", icon: "🤸‍♂️", done: false }
  ]);
  const [newHabit, setNewHabit] = useState("");
  // Toggle habit
  const toggleHabit = (id) => {
    const updatedHabits = habits.map((habit) =>
      habit.id === id ? { ...habit, done: !habit.done } : habit
    );
    setHabits(updatedHabits);
  };
  // Add new habit
  const addHabit = () => {
    if (newHabit.trim() === "") return;
    const habit = {
      id: habits.length + 1,
      name: newHabit,
      icon: "⭐",
      done: false
    };
    setHabits([...habits, habit]);
    setNewHabit("");
  };

  // Reset all habits
  const resetHabits = () => {
    const reset = habits.map((habit) => ({ ...habit, done: false }));
    setHabits(reset);
  };

  return (
    <div className="app">
      <h1>🌈 Daily Habit Tracker</h1>
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
        <button onClick={resetHabits} className="reset">
          Reset All
        </button>
      </div>
    </div>
  );
}

export default App;
