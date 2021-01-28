function Task(name, date) {
  this.name = name;
  this.date = date;
}

let tasks = [];

//
const taskInput = document.querySelector("#task"); //the task input text field
const form = document.querySelector("#task-form"); //The form at the top
const filter = document.querySelector("#filter"); //the task filter text field
const taskList = document.querySelector(".collection"); //The ul
const clearBtn = document.querySelector(".clear-tasks"); //the all task clear button
const message = document.querySelector("#message");
const listOfTask = document.querySelector(".task-list");

const addNewTask = function (e) {
  e.preventDefault();
  let taskName = taskInput.value;
  if (taskName === "") {
    message.innerHTML = "Please Provide a task";
    message.classList.remove("hide");
    message.classList.add("red");
    setTimeout(function () {
      message.classList.add("hide");
    }, 3000);
    return;
  }
  const newTask = new Task(taskName, new Date());
  tasks.push(newTask);
  displayText(newTask);
  message.innerHTML = "Task added Successfully";
  message.classList.remove("hide");
  message.classList.add("green");

  setTimeout(function () {
    message.classList.add("hide");
  }, 3000);
};

const displayText = function (task) {
  const li = document.createElement("li");
  li.className = "collection-item";
  const txt = document.createTextNode(task.name);
  const link = document.createElement("a");
  link.innerHTML = '<i class="fa fa-remove"></i>';
  link.className = "delete-item secondary-content";
  li.appendChild(link);
  li.appendChild(txt);
  taskList.appendChild(li);
};

// Clear Task Function definition
function clearAllTasks() {
  alert("Clear tasks ....");
}

// Filter tasks function definition
function filterTasks(e) {
  let filterTasks = [];
  let keyword = filter.value.toLowerCase();
  //tasks.filter((keyword) => keyword.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  tasks.forEach((task) => {
    if (task.name.indexOf(keyword)) {
      filterTasks.add(task);
    }
  });
  displayText(filterTasks);
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are You Sure about that ?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// form submit
form.addEventListener("submit", addNewTask);
// Clear All Tasks
clearBtn.addEventListener("click", clearAllTasks);

//   Filter Task
filter.addEventListener("keyup", filterTasks);

taskList.addEventListener("click", removeTask);
