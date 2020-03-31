console.log("connected!");

// define UI vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// load all event listeners
loadEventListeners();

function loadEventListeners() {
  form.addEventListener("submit", addTask);
}

//add task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add task");
  }

  // Create li elements
  const li = document.createElement("li");
  // Add class
  li.className = "collection-item";
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement("a");
  // Add class
  link.className = "delete-item secondary-content";
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  //Append li to ul
  taskList.append(li);
  console.log(li);

  e.preventDefault();
}
