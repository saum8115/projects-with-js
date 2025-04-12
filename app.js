
let addBtn = document.getElementById("addTaskBtn");
let input = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
addBtn.addEventListener("click", function () {
  let task = input.value.trim();

  if (task === "") return;

  let li = document.createElement("li");
  li.innerHTML = task;

  let del = document.createElement("span");
  del.innerHTML = " ✖";
  del.style.marginLeft = "10px";

  
  del.addEventListener("click", function () {
    taskList.removeChild(li);
  });

  
  li.appendChild(del);

  
  taskList.appendChild(li);

  
  input.value = "";
});