document.addEventListener("DOMContentLoaded", () => {
  // your code here
  console.log("domcontentloaded")
});


//the text i want to grab comes from the name="new-task-description"
//this is done with let newTask = document.getElementById("new-task-description").value;
//then i want to take that newTask and add it to the DOM (I will use populateList)
//figure out how to add li elements to the tasks element
let newTask

function collectTask(){
  newTask = document.getElementById("new-task-description").value;
  console.log(newTask);
}

function populateList(){
  let newListItem = document.createElement("li")
  let ListDelete = document.createElement("div")
  newListItem.appendChild(ListDelete)
  console.log(newListItem)
  document.getElementById("tasks").appendChild(newListItem).textContent=newTask
  
  
}

document.addEventListener("submit", () => {
event.preventDefault();
collectTask()
populateList()
console.log("button pressed")
//document.getElementById("new-task-description")       //trying to reset this field
})


