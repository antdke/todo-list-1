function $(id){
  return document.getElementById(id)
}


let i = $("input")
let t = $("todos")

i.addEventListener("submit", addTodo)

// TODOS
function addTodo(e) {
  e.preventDefault()
  let todo = document.createElement("div")
  todo.append()
  t.append(todo)
}


