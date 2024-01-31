import { useState } from "react";
export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");
  function handleClick() {
    if (enteredTask.trim().length === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }
  return (
    <div className="flex gap-4 items-center">
      <input
        onChange={(e) => setEnteredTask(e.target.value)}
        type="text"
        value={enteredTask}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}
