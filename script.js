function $(id){
  return document.getElementById(id)
}


let i = $("input")
let t = $("todos")
let tb = $("textbox")
let taskText = "";

tb.addEventListener("change", createTaskText)
i.addEventListener("submit", addTodo)


// TODOS
function addTodo(e) {
  e.preventDefault()
  let todo = document.createElement("div")
  let task = document.createElement("p")
  task.innerText = taskText
  let doneButton = document.createElement("button")
  doneButton.innerText = "Done!"
  todo.append(task, doneButton)
  t.append(todo)
}

function createTaskText(e) {
  e.preventDefault()
  taskText = tb.value
}