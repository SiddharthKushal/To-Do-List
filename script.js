let btn = document.querySelector(".btn");
let taskList = document.querySelector(".tasks");
let input = document.querySelector("input");
let completedTaskList = document.querySelector(".completed-tasks");

btn.addEventListener("click", () => {
  let task = input.value;

  if (task !== " " && task.length !== 0) {
    let list = document.createElement("li");
    let listBtn = document.createElement("button");
    listBtn.innerText = "Edit";
    list.innerText = task;
    list.append(listBtn);
    taskList.append(list);
    input.value = " ";

    console.log(list);

    listBtn.addEventListener("click", () => {
      list.contentEditable = "true";
    });

    list.addEventListener("click", () => {
      if (list.style.textDecoration !== "line-through") {
        list.style.textDecoration = "line-through";
        completedTaskList.appendChild(list);
      } else {
        list.style.textDecoration = "none";
        taskList.appendChild(list);
      }
    });
  } else {
    alert("please enter a task");
  }
});
