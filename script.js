var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0];
var incompleteTasksHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("completed-tasks");

var createNewTaskElement = function(taskString) {
  var listItem = document.createElement("li");
  var checkBox = document.createElement("input");
  var label = document.createElement("label");
  var editInput = document.createElement("input");
  var editButton = document.createElement("button");
  var deleteButton = document.createElement("button");

  checkBox.type = "checkbox";
  editInput.type = "text";

  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";

  // Get the current time
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var timeString = hours + ":" + minutes;

  // Set the task label with the task string and current time
  label.innerText = taskString + " - " + timeString;

  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  return listItem;
}

var addTask = function() {
  // Create a new list item for the current date
  var currentDateItem = document.createElement("li");
  currentDateItem.innerText = "Date: " + new Date().toDateString();
  incompleteTasksHolder.insertBefore(currentDateItem, incompleteTasksHolder.firstChild);

  // Create a new task list item
  var listItem = createNewTaskElement(taskInput.value);
  incompleteTasksHolder.insertBefore(listItem, currentDateItem.nextSibling);
  
  bindTaskEvents(listItem, taskCompleted);
  taskInput.value = ""; // Clear input field after adding task
}

var editTask = function() {
  var listItem = this.parentNode;
  var editInput = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");
  var containsClass = listItem.classList.contains("editMode");

  if (containsClass) {
    label.innerText = editInput.value;
  } else {
    editInput.value = label.innerText;
  }
  
  listItem.classList.toggle("editMode");
}

var deleteTask = function() {
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  ul.removeChild(listItem);
  
  // Check if the parent ul has any remaining tasks
  if (ul.children.length === 1) {
    ul.removeChild(ul.firstChild); // Remove the date item if no tasks remaining
  }
}

var taskCompleted = function() {
  var listItem = this.parentNode;
  completedTasksHolder.appendChild(listItem);
  
  // Check if the parent ul has any remaining tasks
  if (incompleteTasksHolder.children.length === 1) {
    incompleteTasksHolder.removeChild(incompleteTasksHolder.firstChild); // Remove the date item if no tasks remaining
    var allTasksCompletedMessage = document.createElement("li");
    allTasksCompletedMessage.innerText = "All tasks completed today";
    completedTasksHolder.insertBefore(allTasksCompletedMessage, completedTasksHolder.firstChild);
  }
}

var taskIncomplete = function() {
  var listItem = this.parentNode;
  incompleteTasksHolder.appendChild(listItem);
  
  // Remove the "All tasks completed today" message if present
  if (completedTasksHolder.children.length === 1) {
    completedTasksHolder.removeChild(completedTasksHolder.firstChild);
  }
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  var checkbox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");

  editButton.onclick = editTask;
  deleteButton.onclick = deleteTask;
  checkbox.onchange = checkBoxEventHandler;
}

addButton.onclick = addTask;

for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

for (var i = 0; i < completedTasksHolder.children.length; i++) {
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}
