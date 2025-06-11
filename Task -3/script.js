// Select elements
const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const taskTime = document.getElementById("taskTime");
const taskList = document.getElementById("taskList");

// Add task
function addTask() {
  const taskText = taskInput.value.trim();
  const date = taskDate.value;
  const time = taskTime.value;

  if (taskText === "" || date === "" || time === "") {
    alert("Please enter task, date and time!");
    return;
  }

  // Create task item
  const li = document.createElement("li");
  li.className = "task-item";

  // Task details div
  const taskDetails = document.createElement("div");
  taskDetails.className = "task-details";
  taskDetails.innerHTML = `<strong>${taskText}</strong><br><small>Due: ${date} ${time}</small>`;

  // Task action buttons
  const actions = document.createElement("div");
  actions.className = "task-actions";

  // Done button
  const doneBtn = document.createElement("button");
  doneBtn.className = "done";
  doneBtn.innerHTML = "✔️";
  doneBtn.onclick = function () {
    li.classList.toggle("completed");
  };

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  deleteBtn.innerHTML = "🗑️";
  deleteBtn.onclick = function () {
    taskList.removeChild(li);
  };

  actions.appendChild(doneBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(taskDetails);
  li.appendChild(actions);

  taskList.appendChild(li);

  // Clear inputs
  taskInput.value = "";
  taskDate.value = "";
  taskTime.value = "";
}
