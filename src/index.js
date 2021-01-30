document.addEventListener("DOMContentLoaded", () => {
 
  
  const newTaskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");


  // const select = document.createElement('select')
  // values = ["URGENT!!", "Meh-whenever", "Forgettable"];
  // select.name = "Urgency";
  // select.id = "Urgency"

  // for (const val of values) {
  //   let option = document.createElement("option");
  //   option.value = val;
  //   option.text = val.charAt(0).toUpperCase() + val.slice(1);
  //   select.appendChild(option);
  // }


//  document.getElementsByTagName("select").forEach(value => {
//   if (value === "URGENT!!"){
//     newTask.fontColor("red")
//   }
//     else if (value === "Meh-whenever"){
//       newTask.fontColor("blue")
//     }
//     else if (value === "Forgettable"){
//       newTask.fontColor("grey")
//     }

// })


 newTaskForm.addEventListener('submit', handleSubmit)


 function handleSubmit(event) {
  event.preventDefault();
  const newTask = document.getElementById("new-task-description").value;
  const urgency = document.getElementById("priority").value;
  if (urgency === "high"){
    taskList.innerHTML += `<li class="task">${newTask.fontcolor("red")}<button class="button" id=${newTask}>X</button></li>`
  }
  else if (urgency === "medium"){
    taskList.innerHTML += `<li class="task">${newTask.fontcolor("yellow")}<button class="button" id=${newTask}>X</button></li>`
  }
  else if (urgency === "low"){
    taskList.innerHTML += `<li class="task">${newTask.fontcolor("green")}<button class="button" id=${newTask}>X</button></li>`
  }
  event.target.reset()

  document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', event => {
  taskList.removeChild(event.target.parentElement)
  })})
  
 }
 
});




  // const select = document.createElement('select')
  // values = ["URGENT!!", "Meh-whenever", "Forgettable"];
  // select.name = "Urgency";
  // select.id = "Urgency"

  // for (const val of values) {
  //   let option = document.createElement("option");
  //   option.value = val;
  //   option.text = val.charAt(0).toUpperCase() + val.slice(1);
  //   select.appendChild(option);
  // }


//  document.getElementsByTagName("select").forEach(value => {
//   if (value === "URGENT!!"){
//     newTask.fontColor("red")
//   }
//     else if (value === "Meh-whenever"){
//       newTask.fontColor("blue")
//     }
//     else if (value === "Forgettable"){
//       newTask.fontColor("grey")
//     }

// })