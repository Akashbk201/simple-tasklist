var getTask = document.getElementById("get-task");
var submitTask = document.getElementById("submit");
var taskContainer = document.getElementById("task-list-container");

function addTask() {
  var getInput = getTask.value;

  // Condition apply, so that we can not put empty task

  if (getInput) {
    // Creating a div
    var createDiv = document.createElement("div");
    createDiv.classList.add("w-2/3", "m-auto", "flex", "gap-4", "my-3");

    // Puting the div inside our task container
    taskContainer.appendChild(createDiv);

    // Creating a input
    var taskName = document.createElement("input");
    taskName.classList.add("basis-3/5", "w-full", "h-10", "px-4");
    taskName.value = getTask.value;

    // puting input inside that new div
    createDiv.appendChild(taskName);

    // Creating a Edit Button
    var taskEdit = document.createElement("a");
    taskEdit.innerText = "Edit";
    taskEdit.classList.add(
      "basis-1/5",
      "text-center",
      "block",
      "bg-lime-500",
      "text-base",
      "font-normal",
      "text-gray-50",
      "py-2",
      "rounded-lg",
      "cursor-pointer"
    );

    // Puting that button inside new div
    createDiv.appendChild(taskEdit);

    // Creating a delete button
    var taskDel = document.createElement("a");
    taskDel.innerText = "Delete";
    taskDel.classList.add(
      "basis-1/5",
      "text-center",
      "block",
      "bg-red-700",
      "text-base",
      "font-normal",
      "text-gray-50",
      "py-2",
      "rounded-lg",
      "cursor-pointer"
    );

    // Puting that button inside new div
    createDiv.appendChild(taskDel);

    getTask.value = "";

    // Delete Button Function
    taskDel.addEventListener("click", (event) => {
      event.target.parentElement.remove();
    });
  } else {
    alert("Please Enter a Task!");
  }
}
