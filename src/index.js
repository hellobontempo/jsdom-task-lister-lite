document.addEventListener("DOMContentLoaded", () => {
 
  const newTaskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");
 


 newTaskForm.addEventListener('submit', handleSubmit)

 function handleSubmit(event) {
    event.preventDefault();
    const newTask = document.getElementById("new-task-description").value;
   taskList.innerHTML += `<li class="task">${newTask}</li>`
   event.target.reset()
  }

});



