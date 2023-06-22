const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const toggleButton = document.getElementById("toggleButton");

// Function to add a new task
function addTask() {
  const taskText = taskInput.value;
  if (taskText.trim() !== "") {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    const taskTextElement = document.createElement("span");
    taskTextElement.classList.add("task-text");
    taskTextElement.textContent = taskText;
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", deleteTask);
    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}

// Function to delete a task
function deleteTask(event) {
  const taskItem = event.target.parentElement;
  taskList.removeChild(taskItem);
}

// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Add event listeners
addButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
toggleButton.addEventListener("click", toggleDarkMode);
